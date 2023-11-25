<template>
  <nuxt-layout name="auth">
    <template #default>
      <v-form @submit.prevent="f.auth.login(data)">
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Entre com seus dados</v-card-subtitle>

        <v-expand-transition>
          <v-alert v-model="f.auth.error" type="error">
            {{ f.auth.error.message || f.auth.error.code }}
          </v-alert>
        </v-expand-transition>

        <v-expand-transition>
          <v-alert v-model="f.auth.success" type="success"> Redirecionando </v-alert>
        </v-expand-transition>

        <v-card-text>
          <v-text-field v-model="data.email" label="E-mail" />
          <v-text-field v-model="data.password" label="Senha" type="password" />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn type="submit" text="Login" class="bg-primary" :loading="f.auth.busy" />
        </v-card-actions>
      </v-form>
    </template>
  </nuxt-layout>
</template>

<script setup>
import { reactive } from "vue";
const route = useRoute();
const router = useRouter();

const data = reactive({
  email: "",
  password: "",
});

import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

f.event.on("loginSuccess", () => {
  router.push(route.query.redirect || "/");
});
</script>
