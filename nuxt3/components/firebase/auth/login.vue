<template>
  <div>
    <v-btn @click="auth.login('google')">Google Login</v-btn>
    <pre>auth: {{ auth }}</pre>
    <pre>user: {{ user }}</pre>
  </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: [String],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

import useFirebaseAuth from "@/composables/useFirebaseAuth";
const auth = useFirebaseAuth({
  data: { email: "", password: "" },
});

const user = reactive({
  busy: false,
  data: { email: "", password: "" },
  async submit() {
    //
  },
});
</script>
