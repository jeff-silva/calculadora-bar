<template>
  <v-container>
    <br />
    <v-btn :loading="f.auth.loading" @click="f.auth.login({ email: 'ana2@grr.la', password: 'ana2@grr.la' })">
      login error
    </v-btn>
    <v-btn :loading="f.auth.loading" @click="f.auth.login({ email: 'ana@grr.la', password: 'ana@grr.la' })">
      login
    </v-btn>
    <v-btn :loading="f.auth.loading" @click="f.auth.logout()"> logout </v-btn>
    <pre>{{ f }}</pre>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";

import useFirebaseStore from "@/stores/useFirebaseStore";
const f = useFirebaseStore();
</script>
