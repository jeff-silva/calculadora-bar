<!-- TODO: Só pode editar se for proprietário, do contrário, só com permissão -->
<!-- TODO: Botão de compartilhamento -->
<!-- TODO: Melhorar interface -->
<!-- TODO: Salvar total, dados da divisão, data create e update -->
<template>
  <nuxt-layout name="app">
    <template #main>
      <v-form @submit.prevent="form.submit()" v-if="can.edit()">
        <v-expand-transition>
          <v-alert type="success" class="mb-6" v-if="form.success">Dados salvos</v-alert>
        </v-expand-transition>

        <v-window v-model="tab.value">
          <v-window-item value="info">
            <v-card subtitle="Informações principais">
              <v-card-text>
                <v-text-field label="Nome do evento" v-model="form.data.name" />
                <!-- <pre>{{ form.data }}</pre> -->
              </v-card-text>
            </v-card>
            <br />

            <v-card subtitle="Colaboradores">
              <v-card-text>
                <div class="text-center text-disabled" v-if="form.data.admins.length == 0">
                  Nenhum colaborador criado
                </div>
                <template v-for="o in form.data.admins">
                  <v-text-field
                    v-model="o.email"
                    label="E-mail"
                    append-inner-icon="mdi-delete"
                    @click:appendInner="form.adminRemove(o)"
                  />
                </template>
              </v-card-text>
              <div class="d-flex justify-end">
                <v-btn color="primary" text="Add" prepend-icon="mdi-plus" @click="form.adminAdd()" rounded="0" />
              </div>
            </v-card>
          </v-window-item>

          <v-window-item value="users">
            <v-card subtitle="Pessoas">
              <v-card-text class="d-flex flex-column" style="gap: 20px">
                <div
                  v-if="form.data.users.length == 0"
                  class="text-center bg-grey-lighten-4 py-3 text-disabled rounded"
                >
                  Nenhuma pessoa criada
                </div>
                <template v-for="o in form.data.users">
                  <v-text-field
                    v-model="o.name"
                    label="Nome do participante"
                    :hide-details="true"
                    :append-inner-icon="f.user ? 'mdi-delete' : null"
                    @click:append-inner="form.userRemove(o)"
                  />
                </template>
              </v-card-text>
              <div class="d-flex justify-end">
                <v-btn color="primary" text="Add" prepend-icon="mdi-plus" @click="form.userAdd()" rounded="0" />
              </div>
            </v-card>
          </v-window-item>

          <v-window-item value="purchases">
            <v-card subtitle="Gastos">
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
                      <br />
                      <v-row>
                        <v-col cols="12">
                          <v-text-field v-model="o.name" label="Produto" :hide-details="true" />
                        </v-col>
                        <v-col cols="12" md="8">
                          <v-money v-model="o.amount" label="Preço" :hide-details="true" />
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field
                            v-model.number="o.quantity"
                            label="Quant."
                            type="number"
                            :hide-details="true"
                            :prepend-inner-icon="f.user ? 'mdi-minus' : null"
                            :append-inner-icon="f.user ? 'mdi-plus' : null"
                            @click:prependInner="o.quantity = Math.max(1, o.quantity - 1)"
                            @click:appendInner="o.quantity++"
                          />
                        </v-col>
                        <v-col cols="12">
                          <v-select
                            v-model="o.divideBy"
                            label="Quem vai consumir?"
                            multiple
                            :items="form.data.users"
                            item-value="uid"
                            item-title="name"
                            :hide-details="true"
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
              <div class="d-flex justify-end">
                <v-btn color="primary" text="Add" prepend-icon="mdi-plus" @click="form.purchaseAdd()" rounded="0" />
              </div>
            </v-card>
          </v-window-item>
        </v-window>
        <br />

        <v-card subtitle="Resultados">
          <v-card-text>
            <div class="pa-3 text-right mb-2 elevation-1 rounded">Total: {{ form.result.total }}</div>
            <v-expansion-panels>
              <template v-for="o in form.result.division">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <v-row>
                      <v-col cols="6">{{ o.user.name }}</v-col>
                      <v-col cols="6">{{ format.money(o.total) }}</v-col>
                    </v-row>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text style="margin: -6px -24px -14px">
                    <v-table>
                      <tbody>
                        <template v-for="oo in o.purchases">
                          <tr>
                            <td>{{ oo.purchase.name }}</td>
                            <td>{{ format.money(oo.purchase.amount) }}</td>
                            <td>/ {{ oo.purchase.divideBy.length }}</td>
                            <td class="font-weight-bold">= {{ format.money(oo.total) }}</td>
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

        <v-bottom-navigation>
          <v-btn text="Info" stacked prepend-icon="material-symbols:info-outline" @click="tab.set('info')" />
          <v-btn text="Pessoas" stacked prepend-icon="material-symbols:frame-person" @click="tab.set('users')" />
          <v-btn text="Gastos" stacked prepend-icon="solar:chat-round-money-outline" @click="tab.set('purchases')" />
          <v-btn text="Salvar" stacked type="submit" color="primary" prepend-icon="mdi-check" />
        </v-bottom-navigation>
      </v-form>

      <div v-if="!can.edit()">
        <v-card :subtitle="form.data.name"></v-card>
        <br />

        <v-card subtitle="Consumos">
          <v-table>
            <colgroup>
              <col width="*" />
              <col width="100" />
              <col width="80" />
              <col width="150" />
            </colgroup>
            <tbody>
              <template v-for="o in form.data.purchases">
                <tr>
                  <td class="py-2">
                    <div>{{ o.name }}</div>
                    <small class="d-block text-disabled">
                      Consumido por
                      {{
                        form.data.users
                          .filter((u) => o.divideBy.includes(u.uid))
                          .map((u) => u.name)
                          .join(", ")
                      }}
                    </small>
                  </td>
                  <td>{{ format.money(o.amount) }}</td>
                  <td>x {{ o.quantity }}</td>
                  <td>{{ format.money(o.amount * o.quantity) }}</td>
                </tr>
              </template>
            </tbody>
          </v-table>
        </v-card>
        <br />

        <v-card subtitle="Divisão">
          <v-table>
            <colgroup>
              <col width="*" />
              <col width="150" />
            </colgroup>
            <tbody>
              <template v-for="o in form.result.division">
                <tr>
                  <td>{{ o.user.name }}</td>
                  <td>{{ format.money(o.total) }}</td>
                </tr>
              </template>
              <tr>
                <td class="text-right">Total:</td>
                <td>{{ format.money(form.result.total) }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </div>
    </template>
  </nuxt-layout>
</template>

<script setup>
import { reactive, defineProps, defineEmits, computed } from "vue";
import format from "@/utils/format";

const route = useRoute();
const router = useRouter();

import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

const props = defineProps({
  modelValue: {
    type: [String],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const tab = reactive({
  value: "info",
  set(value) {
    this.value = value;
  },
});

import useForm from "@/composables/useForm";

const form = useForm({
  data: { uid: false, ownerUID: f.user.uid, name: "", users: [], purchases: [], admins: [] },
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
  async adminAdd() {
    const uid = this.uid();
    this.data.admins.push({ uid, email: "" });
  },
  async adminRemove(item) {
    if (!confirm(`Remover ${item.email}?`)) return;
    const index = this.data.admins.indexOf(item);
    this.data.admins.splice(index, 1);
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
  form.fill({ ...form.data, ...division });

  f.firestore.onSnapshot("division", route.params.id, (doc) => {
    form.fill({ ...form.data, ...doc.data() });
  });
}

const can = reactive({
  edit() {
    if (!f.user) return false;
    if (form.data.ownerUID == f.user.uid) return true;
    if (form.data.admins.filter((a) => a.email == f.user.email)) return true;
    return false;
  },
});
</script>
