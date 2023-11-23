<template>
  <v-container style="max-width: 800px">
    <v-defaults-provider :defaults="defaultsProvider">
      <div class="d-flex flex-column" style="gap: 25px">
        <v-card>
          <v-card-title>Pessoas</v-card-title>
          <v-card-text>
            <v-expansion-panels variant="accordion" v-model="calc.people.focus">
              <template v-for="o in calc.people.items">
                <v-expansion-panel :value="o">
                  <v-expansion-panel-title>
                    {{ o.name || "Sem nome" }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="Nome" v-model="o.name" />
                      </v-col>
                      <v-col cols="12">
                        <v-textarea label="Observação" v-model="o.observation" auto-grow />
                      </v-col>
                    </v-row>
                    <br />
                    <v-card-actions>
                      <v-spacer />
                      <v-btn class="bg-error" prepend-icon="mdi-delete" @click="calc.people.remove(o)">Delete</v-btn>
                    </v-card-actions>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </template>
            </v-expansion-panels>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="calc.people.add()">Criar</v-btn>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-title>Consumo</v-card-title>
          <v-card-text>
            <v-expansion-panels variant="accordion" v-model="calc.products.focus">
              <template v-for="o in calc.products.items">
                <v-expansion-panel :value="o">
                  <v-expansion-panel-title>
                    {{ o.name || "Sem nome" }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="Produto" v-model="o.name" />
                      </v-col>
                      <v-col cols="8">
                        <v-text-field label="Preço" v-model="o.amount" />
                      </v-col>
                      <v-col cols="4">
                        <v-text-field label="Quantidade" v-model="o.quantity" type="number" />
                      </v-col>
                      <v-col cols="12">
                        <v-select
                          label="Quem vai consumir?"
                          v-model="o.divideBy"
                          :items="calc.people.items"
                          item-value="uid"
                          item-title="name"
                          multiple
                        />
                      </v-col>
                    </v-row>
                    <br />
                    <v-card-actions>
                      <v-spacer />
                      <v-btn class="bg-error" prepend-icon="mdi-delete" @click="calc.products.remove(o)">Delete</v-btn>
                    </v-card-actions>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </template>
            </v-expansion-panels>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="calc.products.add()">Criar</v-btn>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-title>Rateio</v-card-title>
          <v-card-text>
            <v-table>
              <tbody>
                <template v-for="o in calc.result.people">
                  <tr>
                    <td>{{ o.person.name }}</td>
                    <td>{{ o.products.map((p) => `${p.quantity} ${p.name}`).join(", ") }}</td>
                    <td>{{ o.total }}</td>
                  </tr>
                </template>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </div>
      <!-- <pre>{{ calc.result }}</pre> -->
    </v-defaults-provider>
  </v-container>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useStorage } from "@vueuse/core";

const state = useStorage("calc", {
  people: [],
  products: [],
});

const calc = reactive({
  uid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  },
  people: {
    focus: false,
    items: state.value.people,
    default(merge = {}) {
      return {
        uid: calc.uid(),
        name: "",
        observation: "",
        ...merge,
      };
    },
    add() {
      this.focus = this.default();
      this.items.push(this.focus);
      state.value.people = this.items;
    },
    remove(item) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
      state.value.people = this.items;
      calc.products.items.map((product) => {
        const index = product.divideBy.indexOf(item.uid);
        product.divideBy.splice(index, 1);
      });
    },
  },
  products: {
    focus: false,
    items: state.value.products,
    default(merge = {}) {
      return {
        uid: calc.uid(),
        name: "",
        amount: 0,
        quantity: 1,
        divideBy: [],
        ...merge,
      };
    },
    add() {
      this.focus = this.default();
      this.items.push(this.focus);
      state.value.products = this.items;
    },
    remove(item) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
      state.value.products = this.items;
    },
  },
  result: computed(() => {
    let result = {
      total: 0,
      people: [],
    };

    result.total = calc.products.items.reduce((total, prod) => {
      const amount = parseFloat((prod.amount || "0").replace(/[^0-9]/g, "")) / 100;
      const quantity = parseFloat(prod.quantity);
      return amount * quantity;
    }, 0);

    calc.people.items.map((person) => {
      let products = calc.products.items.filter((product) => {
        return product.divideBy.includes(person.uid);
      });

      const total = products.reduce((total, prod) => {
        const amount = parseFloat((prod.amount || "0").replace(/[^0-9]/g, "")) / 100;
        const quantity = parseFloat(prod.quantity);
        return (amount * quantity) / prod.divideBy.length;
      }, 0);

      result.people.push({ total, person, products });
    });

    // console.clear();
    // calc.products.items.map((product) => {
    //   console.log(product);
    //   // result.people[person.uid] = { total: 0, person };
    // });

    return result;
  }),
});

const defaultsProviderInputs = { variant: "outlined", hideDetails: true };

const defaultsProvider = {
  VTextField: defaultsProviderInputs,
  VSelect: defaultsProviderInputs,
  VTextarea: defaultsProviderInputs,
  VCard: { class: "bg-grey-lighten-3", elevation: 0 },
  VExpansionPanelText: { class: "pt-3" },
};
</script>
