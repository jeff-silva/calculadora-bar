<template>
  <nuxt-layout name="app">
    <template #main>
      <!-- <app-calculadora-bar /> -->
      Hello!

      <v-btn to="/auth">Login</v-btn>
      <v-btn to="/division">division</v-btn>
    </template>
  </nuxt-layout>
</template>

<script setup>
import useFirebaseStore from "@/stores/useFirebaseStore";
const f = useFirebaseStore();
</script>
