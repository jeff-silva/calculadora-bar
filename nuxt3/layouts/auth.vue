<template>
  <v-app>
    <v-defaults-provider :defaults="defaults">
      <v-row no-gutters class="w-100 h-100 layout-auth__bg-pattern">
        <v-col cols="12" md="6" class="d-none d-md-block"></v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div style="min-width: 300px; max-width: 90vw">
            <v-card>
              <slot name="default"></slot>
              <v-list rounded elevation="4">
                <template v-for="o in links">
                  <v-list-item :to="o.link" v-if="route.path != o.link">
                    {{ o.name }}
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-defaults-provider>
  </v-app>
</template>

<script setup>
const route = useRoute();

const links = [
  { name: "Login", link: "/auth" },
  { name: "Esqueci minha senha", link: "/auth/password" },
  { name: "Criar conta", link: "/auth/register" },
];

const defaults = {
  VAlert: { rounded: 0 },
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
