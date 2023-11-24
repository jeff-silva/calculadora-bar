<template>
  <v-form @submit.prevent="form.submit()">
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="form.data.email" label="E-mail" />
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="form.data.password" label="Senha" type="password" />
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="form.data.password_confirm" label="Repita senha" type="password" />
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-spacer />
        <v-btn type="submit">Cadastrar</v-btn>
      </v-col>
    </v-row>
    <pre>{{ form }}</pre>
  </v-form>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";
import f from "@/utils/firebase";

const props = defineProps({});
const emit = defineEmits(["update:modelValue"]);

const form = reactive({
  busy: false,
  data: { email: "", password: "", password_confirm: "" },
  async submit() {
    this.busy = true;
    try {
      console.log(await f.authRegister(this.data));
    } catch (e) {
      this.error = await f.authError(e);
    }
    this.busy = false;
  },
});
</script>
