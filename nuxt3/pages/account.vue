<template>
  <nuxt-layout name="app">
    <template #main> xxx </template>
  </nuxt-layout>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

definePageMeta({ middleware: ["auth"] });

const props = defineProps({
  modelValue: {
    type: [String],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
