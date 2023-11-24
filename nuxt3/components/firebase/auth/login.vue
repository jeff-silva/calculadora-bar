<template>
  <v-form @submit.prevent="form.submit()">
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="form.data.email" label="E-mail" />
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="form.data.password" label="Senha" type="password" />
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-spacer />
        <v-btn type="submit">Login</v-btn>
      </v-col>
    </v-row>
    <!-- <pre>{{ form }}</pre> -->
    <!-- <pre>{{ f }}</pre> -->
  </v-form>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";
// import f from "@/utils/firebase";

const props = defineProps({});
const emit = defineEmits(["update:modelValue"]);

import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

const form = reactive({
  data: { email: "", password: "" },
  async submit() {
    await f.auth.login(this.data);
  },
});
</script>
