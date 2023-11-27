<template>
  <nuxt-layout name="app">
    <template #main>
      <calcbar :uid="route.params.id" @saved="router.push(`/division/${$event.uid}`)" />
    </template>
  </nuxt-layout>
</template>

<script setup>
import { reactive, defineProps, defineEmits, computed } from "vue";
import format from "@/utils/format";

const route = useRoute();
const router = useRouter();
</script>
