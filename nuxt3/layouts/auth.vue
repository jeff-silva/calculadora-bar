<template>
  <v-app>
    <!-- Loading -->
    <div v-if="!f.ready">Carregando</div>

    <!-- Unlogged -->
    <div v-if="f.ready && !f.user">
      <v-row no-gutters class="layout-auth__bg-pattern" style="height: 100vh">
        <v-col cols="12" md="6" class="d-none d-md-flex align-center justify-center">
          <!-- <div class="bg-white pa-8 rounded-lg">Mensagem</div> -->
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="bg-white py-10 px-6 rounded-lg elevation-4">
            <firebase-auth-login />
            <!-- <firebase-auth-register /> -->
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Logged -->
    <div v-if="f.ready && f.user">
      <v-app-layout navigation-class="bg-grey-lighten-3">
        <template #main="bind">
          <v-container style="max-width: 600px">
            <slot name="main"></slot>
          </v-container>
        </template>

        <template #navigation>
          <div class="bg-grey-lighten-2 text-center py-10">Hello {{ f.user.name }}</div>
          <v-nav
            class="flex-grow-1"
            :items="[
              {
                title: 'Criar divisão',
                icon: 'material-symbols:add',
                bind: { to: '/division/new' },
              },
              {
                title: 'Meus dados',
                icon: 'ic:sharp-manage-accounts',
                bind: { to: '/account' },
              },
            ]"
          />

          <v-nav
            :items="[
              {
                title: 'Sair',
                icon: 'ic:outline-logout',
                bind: {
                  onClick() {
                    f.auth.logout();
                  },
                },
              },
            ]"
          />
        </template>
      </v-app-layout>
    </div>
  </v-app>
</template>

<script setup>
import useFirebase from "@/composables/useFirebase";
const f = useFirebase();
</script>

<style>
.layout-auth__bg-pattern {
  --s: 41px; /* control the size */
  --c1: #f2c45a;
  --c2: #5e8c6a;
  --c3: #88a65e;

  --_g: , var(--c1) 25%, var(--c2) 0 150deg, var(--c1) 0 240deg, #0000 0;
  background: conic-gradient(from 60deg at calc(3.866 * var(--s)), var(--c2) 60deg, #0000 0) calc(1.366 * var(--s))
      calc(1.366 * var(--s)),
    conic-gradient(from 240deg at calc(0.866 * var(--s)), var(--c2) 60deg, #0000 0) calc(2.366 * var(--s))
      calc(1.366 * var(--s)),
    conic-gradient(at var(--s) var(--s), #0000 75%, var(--c1) 0) calc(1.366 * var(--s)) calc(var(--s) / -2),
    conic-gradient(from 30deg at calc(-0.288 * var(--s)) 50%, #0000 120deg, var(--c3) 0),
    conic-gradient(from 90deg at calc(3.732 * var(--s)) calc(1.866 * var(--s)), var(--c3) 120deg, #0000 0),
    conic-gradient(
      from -30deg at calc(3.732 * var(--s)) calc(0.866 * var(--s)),
      var(--c3) 120deg,
      var(--c1) 0 210deg,
      #0000 0
    ),
    conic-gradient(from 150deg at calc(0.866 * var(--s)) var(--_g)),
    conic-gradient(from -30deg at calc(2.866 * var(--s)) var(--_g)) var(--c3);
  background-size: calc(4.732 * var(--s)) calc(2.732 * var(--s));
}
</style>
