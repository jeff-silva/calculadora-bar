<template>
  <nuxt-layout name="auth">
    <template #default>
      <v-form>
        <v-card>
          <v-card-title>Criar Conta</v-card-title>
          <v-card-subtitle>Informe um e-mail e sua senha. É rapidinho!</v-card-subtitle>
          <v-card-text>
            <v-text-field label="E-mail" />
            <v-text-field label="Senha" type="password" />
            <v-text-field label="Repita Senha" type="password" />
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
