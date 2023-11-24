<!-- TODO: Tornar tela da divisão visível, mas não editável -->
<template>
  <nuxt-layout name="app">
    <template #main>
      <v-form @submit.prevent="form.submit()">
        <v-expand-transition>
          <v-alert type="success" class="mb-6" v-if="form.success">Dados salvos</v-alert>
        </v-expand-transition>

        <v-text-field label="Nome do evento" v-model="form.data.name" />
        <br />

        <v-card color="grey-lighten-3" title="Pessoas">
          <v-card-text class="d-flex flex-column" style="gap: 20px">
            <div v-if="form.data.users.length == 0" class="text-center bg-grey-lighten-4 py-3 text-disabled rounded">
              Nenhuma pessoa criada
            </div>
            <template v-for="o in form.data.users">
              <v-text-field
                v-model="o.name"
                label="Nome do participante"
                append-inner-icon="mdi-delete"
                @click:append-inner="form.userRemove(o)"
                :hide-details="true"
              />
            </template>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="form.userAdd()">Nova Pessoa</v-btn>
          </v-card-actions>
        </v-card>
        <br />

        <v-card color="grey-lighten-3" title="Gastos">
          <v-card-text>
            <div
              v-if="form.data.purchases.length == 0"
              class="text-center bg-grey-lighten-4 py-3 text-disabled rounded"
            >
              Nenhum gasto criado
            </div>
            <v-expansion-panels v-model="form.focus">
              <template v-for="o in form.data.purchases">
                <v-expansion-panel :value="o">
                  <v-expansion-panel-title>{{ o.name }}</v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="o.name" label="Produto" />
                      </v-col>
                      <v-col cols="8">
                        <v-money v-model="o.amount" label="Preço" />
                      </v-col>
                      <v-col cols="4">
                        <v-text-field v-model.number="o.quantity" label="Quant." type="number" />
                      </v-col>
                      <v-col cols="12">
                        <v-select
                          v-model="o.divideBy"
                          label="Quem vai consumir?"
                          multiple
                          :items="form.data.users"
                          item-value="uid"
                          item-title="name"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-btn color="error" @click="form.purchaseRemove(o)" prepend-icon="mdi-delete">Deletar</v-btn>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </template>
            </v-expansion-panels>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="form.purchaseAdd()">Novo Gasto</v-btn>
          </v-card-actions>
        </v-card>
        <br />

        <div class="d-flex">
          <v-spacer />
          <v-btn type="submit" color="success" prepend-icon="mdi-check" :loading="form.busy">Salvar</v-btn>
        </div>
        <br />

        <v-card color="grey-lighten-3">
          <v-card-title>Resultados</v-card-title>
          <v-card-text>
            <div class="bg-white pa-3 text-right mb-2 elevation-1 rounded">Total: {{ form.result.total }}</div>
            <v-expansion-panels>
              <template v-for="o in form.result.division">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-row>
                      <v-col cols="6">{{ o.user.name }}</v-col>
                      <v-col cols="6">{{ o.total }}</v-col>
                    </v-row>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-table>
                      <tbody>
                        <template v-for="oo in o.purchases">
                          <tr>
                            <td>{{ oo.purchase.name }}</td>
                            <td>{{ oo.total }}</td>
                            <td class="text-disabled">{{ oo.purchase.amount }} / {{ oo.purchase.divideBy.length }}</td>
                          </tr>
                        </template>
                      </tbody>
                    </v-table>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </template>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-form>
    </template>
  </nuxt-layout>
</template>

<script setup>
import { reactive, defineProps, defineEmits, computed } from "vue";

const route = useRoute();
const router = useRouter();

import useFirebaseStore from "@/stores/useFirebaseStore";
const f = useFirebaseStore();

const props = defineProps({
  modelValue: {
    type: [String],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

import useForm from "@/composables/useForm";

const form = useForm({
  data: { uid: false, ownerUID: f.user.uid, name: "", users: [], purchases: [] },
  async onSubmit() {
    const result = await f.firestore.save("division", this.data);
    router.push(`/division/${result.uid}`);
  },
  uid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  },
  focus: false,
  async userAdd() {
    const uid = this.uid();
    const name = `Pessoa #${this.data.users.length + 1}`;
    this.data.users.push((this.focus = { uid, name }));
  },
  async userRemove(item) {
    if (!confirm(`Remover ${item.name}?`)) return;
    const index = this.data.users.indexOf(item);
    this.data.users.splice(index, 1);
  },
  async purchaseAdd() {
    const uid = this.uid();
    const name = `Item #${this.data.purchases.length + 1}`;
    this.data.purchases.push((this.focus = { uid, name, amount: 0, quantity: 1, divideBy: [] }));
  },
  async purchaseRemove(item) {
    if (!confirm(`Remover ${item.name}?`)) return;
    const index = this.data.purchases.indexOf(item);
    this.data.purchases.splice(index, 1);
  },
  result: computed(() => {
    let result = { total: 0 };

    result.total = form.data.purchases.reduce((total, item) => {
      return total + item.amount * item.quantity;
    }, 0);

    result.division = form.data.users.map((user) => {
      const purchases = form.data.purchases
        .filter((p) => p.divideBy.includes(user.uid))
        .map((purchase) => {
          const total = (purchase.amount * purchase.quantity) / purchase.divideBy.length;
          return { total, purchase };
        });

      const total = purchases.reduce((total, item) => total + item.total, 0);
      return { total, user, purchases };
    });

    return result;
  }),
});

if (route.params.id != "new") {
  const division = await f.firestore.find("division", route.params.id);
  form.fill(division);
}
</script>
