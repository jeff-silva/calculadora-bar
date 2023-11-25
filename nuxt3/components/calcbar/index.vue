<template>
  <v-form>
    <v-stepper v-model="tab.value" class="mx-1">
      <v-stepper-header>
        <v-stepper-item icon="ph:dot" value="info" subtitle="Info" />
        <v-divider />
        <v-stepper-item icon="ph:dot" value="users" subtitle="Pessoas" />
        <v-divider />
        <v-stepper-item icon="ph:dot" value="purchases" subtitle="Gastos" />
      </v-stepper-header>
    </v-stepper>
    <br />

    <v-window v-model="tab.value">
      <!-- Tab Info -->
      <v-window-item value="info">
        <calcbar-card subtitle="Informações Principais">
          <template #default>
            <v-text-field v-model="form.data.name" />
          </template>
          <template #actions>
            <v-btn text="Salvar" prepend-icon="mdi-check" class="bg-primary" />
          </template>
        </calcbar-card>
        <br />

        <calcbar-card subtitle="Colaboradores" :card-text="false">
          <template #default>
            <calcbar-loop v-model="form.data.admins">
              <template #item="bind">
                <div>aa</div>
              </template>
            </calcbar-loop>
          </template>
          <template #actions>
            <v-btn text="Salvar" prepend-icon="mdi-check" class="bg-primary" />
          </template>
        </calcbar-card>
      </v-window-item>

      <!-- Tab Pessoas -->
      <v-window-item value="users">
        <calcbar-card subtitle="Pessoas">
          <template #default>
            <div>Aa</div>
          </template>
          <template #actions>
            <v-btn text="Salvar" prepend-icon="mdi-check" class="bg-primary" />
          </template>
        </calcbar-card>
      </v-window-item>

      <!-- Tab Gastos -->
      <v-window-item value="purchases">
        <calcbar-card subtitle="Gastos">
          <template #default>
            <div>Aa</div>
          </template>
          <template #actions>
            <v-btn text="Salvar" prepend-icon="mdi-check" class="bg-primary" />
          </template>
        </calcbar-card>
      </v-window-item>
    </v-window>
    <br />

    <calcbar-card subtitle="Resultado">
      <template #default>
        <div>Aa</div>
      </template>
      <template #actions>
        <v-btn text="Salvar" prepend-icon="mdi-check" class="bg-primary" />
      </template>
    </calcbar-card>

    <div class="pa-3" style="position: fixed; bottom: 100px; right: 0; z-index: 9">
      <v-menu location="top right" offset="10" :close-on-content-click="false">
        <template #activator="bind">
          <v-btn icon="solar:hamburger-menu-linear" v-bind="bind.props" />
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

    <pre>{{ form }}</pre>
  </v-form>
</template>

<script setup>
import { reactive, defineProps, defineEmits, watch, computed } from "vue";

const props = defineProps({
  uid: { type: [String], default: "" },
});

const emit = defineEmits(["update:modelValue"]);

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
    {
      text: "Salvar",
      bind: {
        icon: "mdi-check",
        class: "bg-primary",
        onClick() {
          console.log("aaa");
        },
      },
    },
  ],
});

import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

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
  async load() {
    if (!isNaN(props.uid)) return;

    const division = await f.firestore.find("division", props.uid);
    form.fill({ ...form.data, ...division });

    // f.firestore.onSnapshot("division", props.uid, (doc) => {
    //   form.fill({ ...form.data, ...doc.data() });
    // });
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
