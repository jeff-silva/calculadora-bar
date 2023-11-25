<!-- TODO: Ao fazer logout, página não redireciona -->

<template>
  <v-app>
    <!-- Loading -->
    <div v-if="!f.ready">Carregando</div>

    <v-app-layout navigation-class="bg-grey-lighten-3" v-if="f.ready">
      <template #main="bind">
        <v-container style="max-width: 600px">
          <slot name="main"></slot>
        </v-container>
      </template>

      <template #navigation>
        <div v-if="f.user" class="bg-grey-lighten-2 text-center py-10">
          <img
            v-if="f.user.photoURL"
            :src="f.user.photoURL"
            alt=""
            class="rounded-circle"
            style="width: 100px; height: 100px; object-fit: cover"
          />
          <div>Hello {{ f.user.name }}</div>
        </div>
        <v-nav
          v-if="f.user"
          class="flex-grow-1"
          :items="[
            {
              title: 'Criar conta',
              icon: 'material-symbols:add',
              bind: { to: '/division/new' },
            },
            {
              title: 'Contas',
              icon: 'material-symbols:list-alt-outline-sharp',
              bind: { to: '/division' },
            },
            {
              title: 'Meus dados',
              icon: 'ic:sharp-manage-accounts',
              bind: { to: '/account' },
            },
          ]"
        />

        <v-nav
          v-if="f.user"
          :items="[
            {
              title: 'Sair',
              icon: 'ic:outline-logout',
              bind: {
                onClick: authLogout,
              },
            },
          ]"
        />

        <v-nav
          v-if="!f.user"
          :items="[
            {
              title: 'Login',
              icon: 'material-symbols:key-outline',
              bind: { to: `/auth?redirect=${route.fullPath}` },
            },
          ]"
        />
      </template>
    </v-app-layout>
  </v-app>
</template>

<script setup>
import useFirebaseStore from "@/stores/useFirebaseStore";
const f = useFirebaseStore();

const route = useRoute();

const authLogout = async () => {
  await f.auth.logout();
  location.reload();
};
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
