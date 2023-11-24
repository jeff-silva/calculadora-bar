<template>
  <nuxt-layout name="auth">
    <template #main> xxx </template>
  </nuxt-layout>
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
</script>
