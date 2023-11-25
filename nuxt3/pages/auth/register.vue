<template>
  <nuxt-layout name="auth">
    <template #default>
      <v-form @submit.prevent="form.submit()">
        <v-card-title>Criar Conta</v-card-title>
        <v-card-subtitle>Informe um e-mail e sua senha. É rapidinho!</v-card-subtitle>

        <v-expand-transition>
          <v-alert v-model="f.auth.error" type="error">
            {{ f.auth.error.message || f.auth.error.code }}
          </v-alert>
        </v-expand-transition>

        <v-expand-transition>
          <v-alert v-model="f.auth.success" type="success"> Bem vindo(a)! </v-alert>
        </v-expand-transition>

        <v-card-text>
          <v-text-field v-model="form.data.email" label="E-mail" />
          <v-text-field v-model="form.data.password" label="Senha" type="password" />
          <!-- <v-text-field label="Repita Senha" type="password" /> -->
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn type="submit" text="Registrar" class="bg-primary" :loading="f.auth.busy" />
        </v-card-actions>
      </v-form>
    </template>
  </nuxt-layout>
</template>

<script setup>
import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

import useForm from "@/composables/useForm";
const form = useForm({
  data: { email: "", password: "" },
  async onSubmit() {
    return await f.auth.register(form.data);
  },
});

const router = useRouter();

f.event.on("registerSuccess", () => {
  router.push("/");
});
</script>
