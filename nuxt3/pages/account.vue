<template>
  <nuxt-layout name="app">
    <template #main>
      <v-form @submit.prevent="form.submit()">
        <v-image-field v-model="form.data.photoURL" @fileChange="onFileChange($event)" />
        <br />
        <v-text-field v-model="form.data.name" label="Nome" />
        <v-text-field v-model="form.data.email" label="E-mail" />
        <!-- <v-text-field v-model="form.data.phoneNumber" label="Telefone" /> -->
        <div class="d-flex align-center justify-end">
          <v-btn type="submit" text="Salvar" color="primary" />
        </div>
      </v-form>
    </template>
  </nuxt-layout>
</template>

<script setup>
import { reactive } from "vue";

definePageMeta({ middleware: ["auth"] });

import useFirebaseStore from "@/stores/useFirebaseStore";
const f = useFirebaseStore();

import useForm from "@/composables/useForm";
const form = useForm({
  data: { ...f.user },
  async onSubmit() {
    await f.auth.update(form.data);
    location.reload();
  },
});

const onFileChange = async (file) => {
  const upload = await f.storage.upload(file);
  form.data.photoURL = upload.url;
};
</script>
