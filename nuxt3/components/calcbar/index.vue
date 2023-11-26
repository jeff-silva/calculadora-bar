<!-- TODO: Salvar total, dados da divisão, data create e update -->
<!-- TODO: Pedir permissão para editar -->

<template>
  <calcbar-view v-if="!form.canEdit()" :form="form" />

  <v-form @submit.prevent="form.submit()" v-if="form.canEdit()">
    <v-expand-transition>
      <v-alert type="success" class="mb-6" v-if="form.success">Dados salvos</v-alert>
    </v-expand-transition>

    <v-stepper v-model="tab.value" class="mx-1">
      <v-stepper-header>
        <v-stepper-item :editable="true" type="button" edit-icon="mdi-check" value="info" subtitle="Info" />
        <v-divider />
        <v-stepper-item :editable="true" type="button" edit-icon="mdi-check" value="users" subtitle="Pessoas" />
        <v-divider />
        <v-stepper-item :editable="true" type="button" edit-icon="mdi-check" value="purchases" subtitle="Gastos" />
      </v-stepper-header>
    </v-stepper>
    <br />

    <v-window v-model="tab.value">
      <!-- Tab Info -->
      <v-window-item value="info">
        <calcbar-card subtitle="Informações Principais">
          <template #default>
            <v-text-field v-model="form.data.name" label="Nome do evento" />
          </template>
          <template #actions>
            <v-btn v-if="share.isSupported" color="success" @click="share.share({ title: form.data.name, url: '' })">
              <v-icon icon="material-symbols:share" />
              <div class="ms-2 d-none d-md-block">Share</div>
            </v-btn>
            <v-btn :color="clipboard.copied.value ? 'success' : null" @click="clipboard.copy(form.url)">
              <v-icon :icon="clipboard.copied.value ? 'mdi-check' : 'material-symbols:content-copy-outline'" />
              <div class="ms-2 d-none d-md-block">Copiar URL</div>
            </v-btn>
            <v-spacer />
            <v-btn type="submit" text="Salvar" prepend-icon="mdi-check" class="bg-primary" :loading="form.busy" />
          </template>
        </calcbar-card>
        <br />

        <!-- Colaboradores -->
        <calcbar-card subtitle="Colaboradores" :card-text="false">
          <template #default>
            <v-card-text>
              <p>
                Colaboradores podem ajudar a editar gastos e pessoas. Insira o e-mail do colaborador e ao acessar esta
                página, ele poderá editar.
              </p>
            </v-card-text>
            <calcbar-loop
              v-model="form.data.admins"
              ref="adminsRef"
              item-title="email"
              :accordion="false"
              :default="{ email: '' }"
            >
              <template #item="bind">
                <v-text-field
                  v-model="bind.item.email"
                  label="E-mail"
                  append-inner-icon="mdi-delete"
                  @click:appendInner="bind.delete(bind.item)"
                />
              </template>
            </calcbar-loop>
          </template>
          <template #actions>
            <v-btn text="Add" prepend-icon="mdi-plus" @click="component.getRef('adminsRef').add()" />
            <v-btn type="submit" text="Salvar" prepend-icon="mdi-check" class="bg-primary" :loading="form.busy" />
          </template>
        </calcbar-card>
      </v-window-item>

      <!-- Tab Pessoas -->
      <v-window-item value="users">
        <calcbar-card subtitle="Pessoas" :card-text="false">
          <template #default>
            <v-card-text> Gerencie todas as pessoas que participarão da divisão </v-card-text>
            <calcbar-loop
              v-model="form.data.users"
              ref="usersRef"
              item-title="name"
              :accordion="false"
              :default="{ name: '' }"
            >
              <template #item="bind">
                <v-text-field
                  v-model="bind.item.name"
                  label="Nome"
                  append-inner-icon="mdi-delete"
                  @click:appendInner="bind.delete(bind.item)"
                />
              </template>
            </calcbar-loop>
          </template>
          <template #actions>
            <v-btn text="Add" prepend-icon="mdi-plus" @click="component.getRef('usersRef').add()" />
            <v-btn type="submit" text="Salvar" prepend-icon="mdi-check" class="bg-primary" :loading="form.busy" />
          </template>
        </calcbar-card>
      </v-window-item>

      <!-- Tab Gastos -->
      <v-window-item value="purchases">
        <calcbar-card subtitle="Gastos" :card-text="false">
          <template #default>
            <v-card-text> Informe todos os itens que serão consumidos. </v-card-text>
            <calcbar-loop
              v-model="form.data.purchases"
              ref="purchasesRef"
              item-title="name"
              :default="{ name: '', amount: 0, quantity: 1, divideBy: [] }"
            >
              <template #item="bind">
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="bind.item.name" :hide-details="true" label="Nome" />
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-money v-model="bind.item.amount" :hide-details="true" label="Valor" reverse />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="bind.item.quantity"
                      :hide-details="true"
                      label="Quandidade"
                      prepend-inner-icon="mdi-minus"
                      append-inner-icon="mdi-plus"
                      @click:prependInner="bind.item.quantity = Math.max(1, bind.item.quantity - 1)"
                      @click:appendInner="bind.item.quantity = bind.item.quantity + 1"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="bind.item.divideBy"
                      label="Consumido por"
                      multiple
                      :items="form.data.users"
                      item-value="uid"
                      item-title="name"
                      :hide-details="true"
                    />
                  </v-col>
                </v-row>
              </template>
            </calcbar-loop>
          </template>
          <template #actions>
            <v-btn text="Add" prepend-icon="mdi-plus" @click="component.getRef('purchasesRef').add()" />
            <v-btn type="submit" text="Salvar" prepend-icon="mdi-check" class="bg-primary" :loading="form.busy" />
          </template>
        </calcbar-card>
      </v-window-item>
    </v-window>
    <br />

    <calcbar-card subtitle="Resultado" :card-text="false">
      <template #default>
        <v-table>
          <colgroup>
            <col width="*" />
            <col width="100" />
          </colgroup>
          <tbody>
            <template v-for="o in form.result.division">
              <tr>
                <td>{{ o.user.name }}</td>
                <td>
                  <small>{{ format.money(o.total) }}</small>
                </td>
              </tr>
            </template>
            <tr>
              <td class="text-right">Total:</td>
              <td>
                <small>{{ format.money(form.result.total) }}</small>
              </td>
            </tr>
          </tbody>
        </v-table>
      </template>
    </calcbar-card>

    <br /><br /><br />

    <div class="pa-6" style="position: fixed; bottom: 0; right: 0; z-index: 9">
      <v-menu location="top right" offset="10" :close-on-content-click="false">
        <template #activator="bind">
          <v-btn icon="mdi-dots-horizontal" v-bind="bind.props" color="success" />
        </template>

        <div class="d-flex flex-column" style="gap: 10px">
          <template v-for="o in actions.items">
            <v-tooltip :text="o.text">
              <template #activator="bind">
                <v-btn v-bind="{ ...o.bind, ...bind.props }" />
              </template>
            </v-tooltip>
          </template>
        </div>
      </v-menu>
    </div>
  </v-form>
</template>

<script setup>
import { reactive, defineProps, defineEmits, watch, computed, getCurrentInstance } from "vue";

const props = defineProps({
  uid: { type: [String], default: "" },
});

const emit = defineEmits(["update:modelValue", "saved"]);

const component = {
  inst: getCurrentInstance(),
  getRef(name) {
    return this.inst.ctx.$refs[name];
  },
};

const tab = reactive({
  value: "info",
  set(value) {
    this.value = value;
  },
});

const actions = reactive({
  items: [
    {
      text: "Info",
      bind: {
        icon: "material-symbols:info-outline",
        onClick: () => tab.set("info"),
        active: computed(() => tab.value == "info"),
      },
    },
    {
      text: "Pessoas",
      bind: {
        icon: "material-symbols:frame-person",
        onClick: () => tab.set("users"),
        active: computed(() => tab.value == "users"),
      },
    },
    {
      text: "Gastos",
      bind: {
        icon: "solar:chat-round-money-outline",
        onClick: () => tab.set("purchases"),
        active: computed(() => tab.value == "purchases"),
      },
    },
  ],
});

import { useClipboard, useShare } from "@vueuse/core";
const clipboard = useClipboard({ legacy: true });
const share = useShare();

import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

import useForm from "@/composables/useForm";

const form = useForm({
  data: { uid: false, ownerUID: f.user.uid, name: "", users: [], purchases: [], admins: [] },
  url: location.href,
  focus: false,
  preventSnap: false,
  async onSubmit() {
    this.preventSnap = true;
    emit("saved", await f.firestore.save("division", this.data));
    setTimeout(() => {
      this.preventSnap = false;
    }, 1000);
  },
  uid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  },
  canEdit() {
    if (!f.user) return false;
    if (form.data.ownerUID == f.user.uid) return true;
    if (form.data.admins.filter((a) => a.email == f.user.email)) return true;
    return false;
  },
  async load() {
    if (!isNaN(props.uid)) return;

    const division = await f.firestore.find("division", props.uid);
    form.fill({ ...form.data, ...division });

    f.firestore.onSnapshot("division", props.uid, (doc) => {
      if (this.preventSnap) return;
      form.fill({ ...form.data, ...doc.data() });
    });
  },
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

// watch(props.uid, async (value) => {
//   await form.load();
// });

await form.load();
</script>
