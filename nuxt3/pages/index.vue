<template>
  <nuxt-layout name="app">
    <template #main>
      <!-- <app-calculadora-bar /> -->

      <v-card title="Crie sua conta" subtitle="É rapidinho..." elevation="3" v-if="!f.user">
        <v-card-text>
          <p>
            Só precisa informar seu e-mail e criar uma senha para ter acesso total à ferramenta, criar, alterar e
            compartilhar cálculos.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text="Login" to="/auth" />
          <v-btn text="Cadastre-se" to="/auth/register" />
        </v-card-actions>
      </v-card>
    </template>
  </nuxt-layout>
</template>

<script setup>
import useFirebase from "@/composables/useFirebase";
const f = useFirebase();
</script>
