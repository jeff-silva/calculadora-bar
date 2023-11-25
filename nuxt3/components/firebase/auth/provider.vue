<template>
  <slot name="loading" v-bind="slotBind()" v-if="!f.ready"></slot>
  <slot name="unlogged" v-bind="slotBind()" v-if="f.ready && !f.user"></slot>
  <slot name="logged" v-bind="slotBind()" v-if="f.ready && f.user"></slot>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

const slotBind = (merge = {}) => {
  return {
    user: f.user,
    ...merge,
  };
};
</script>
