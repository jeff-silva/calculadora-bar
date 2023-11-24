<template>
  <slot name="unlogged" v-bind="slotBind()" v-if="!auth.user"></slot>
  <slot name="logged" v-bind="slotBind()" v-if="auth.user"></slot>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

import useFirebaseAuth from "@/composables/useFirebaseAuth";
const auth = useFirebaseAuth();

const slotBind = (merge = {}) => {
  return {
    user: auth.user,
    ...merge,
  };
};
</script>
