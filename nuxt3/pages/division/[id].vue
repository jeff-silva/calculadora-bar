<template>
  <nuxt-layout name="auth">
    <template #main>
      <pre>{{ f }}</pre>
      <pre>{{ f }}</pre>
      <pre>{{ f }}</pre>
    </template>
  </nuxt-layout>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

const props = defineProps({
  modelValue: {
    type: [String],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
