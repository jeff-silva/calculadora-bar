<template>
  <v-container style="max-width: 800px">
    <!-- <firebase-auth-provider>
      <template #unlogged="bind">
        <firebase-auth-login />
        <firebase-auth-register />
      </template>
      <template #logged="bind">
        <pre>{{ bind }}</pre>
      </template>
    </firebase-auth-provider> -->

    <!-- <app-calculadora-bar /> -->

    <div><v-btn @click="f.auth.register({ email: login, password: login })">Register</v-btn></div>
    <div><v-btn @click="f.auth.login({ email: login, password: login })">Login</v-btn></div>
    <div><v-btn @click="f.auth.logout()">Logout</v-btn></div>
    <pre>{{ f }}</pre>
  </v-container>
</template>

<script setup>
import useFirebase from "@/composables/useFirebase";
const f = useFirebase();
const login = "ana@grr.la";
</script>
