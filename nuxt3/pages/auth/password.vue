<template>
  <nuxt-layout name="auth">
    <template #default>
      <v-form>
        <v-card>
          <v-card-title>Recuperar Senha</v-card-title>
          <v-card-subtitle>Processo de recuperação de senha</v-card-subtitle>
          <v-card-text>
            <v-text-field label="E-mail" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn type="submit" text="Login" />
          </v-card-actions>
        </v-card>
      </v-form>
    </template>
  </nuxt-layout>
</template>

<script setup></script>
