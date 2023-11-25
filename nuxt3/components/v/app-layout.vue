<template>
  <v-app class="v-app-layout">
    <v-defaults-provider :defaults="defaultsProvider">
      <!-- loading -->
      <v-layout v-if="!props.ready">
        <slot name="loading" v-bind="slotBind()">
          <div :class="props.loadingClass">
            <v-icon icon="svg-spinners:3-dots-fade" size="30" />
          </div>
        </slot>
      </v-layout>

      <!-- view=admin -->
      <v-layout class="rounded rounded-md" v-if="props.ready">
        <v-navigation-drawer
          v-model="nav.drawer"
          width="300"
          elevation="0"
          :class="`v-app-layout__navigation ${props.navigationClass}`"
          border="0"
        >
          <slot name="navigation" v-bind="slotBind()"></slot>
        </v-navigation-drawer>

        <!-- Mobile -->
        <v-main v-touch="layout.vTouch" v-if="display.mobile.value">
          <div class="d-flex flex-column" style="height: 100vh">
            <v-slide-y-transition>
              <div :class="`d-flex align-center pa-2 ${props.headerClass}`" style="gap: 10px" v-if="layout.headerShow">
                <v-btn icon="ci:hamburger" size="30" flat @click="nav.drawer = !nav.drawer" class="d-lg-none" />
                <slot name="header" v-bind="slotBind()"></slot>
              </div>
            </v-slide-y-transition>
            <div style="flex-grow: 1; overflow-x: hidden; overflow-y: auto">
              <slot name="main" v-bind="slotBind()"></slot>
            </div>
            <v-expand-transition>
              <div
                :class="`d-flex align-center pa-2 ${props.headerClass}`"
                style="gap: 10px"
                v-if="slots.footer && layout.footerShow"
              >
                <slot name="footer" v-bind="slotBind()"></slot>
              </div>
            </v-expand-transition>
          </div>
        </v-main>

        <!-- Desktop -->
        <v-main v-if="!display.mobile.value">
          <div class="d-flex flex-column" style="height: 100vh">
            <div :class="`d-flex align-center pa-3 ${props.headerClass}`" style="gap: 15px" v-if="slots.header">
              <v-defaults-provider :defaults="{ VBtn: { flat: true, size: 30 } }">
                <slot name="header" v-bind="slotBind()"></slot>
              </v-defaults-provider>
            </div>
            <div :class="`flex-grow-1 pa-3 ${props.mainClass}`" style="overflow: auto">
              <slot name="main" v-bind="slotBind()"></slot>
            </div>
            <div :class="`${props.footerClass}`">
              <slot name="footer" v-bind="slotBind()"></slot>
            </div>
          </div>
        </v-main>
      </v-layout>
    </v-defaults-provider>
  </v-app>
</template>

<script setup>
import { reactive, defineProps, defineEmits, defineExpose, useSlots } from "vue";

const props = defineProps({
  ready: { type: Boolean, default: true },
  view: { type: String, default: "admin" },
  defaultsProvider: { type: Object, default: () => ({}) },
  loadingClass: { type: String, default: "w-100 d-flex align-center justify-center" },
  navigationClass: { type: String, default: "" },
  headerClass: { type: String, default: "" },
  mainClass: { type: String, default: "" },
  footerClass: { type: String, default: "" },
});

const slots = useSlots();

const view = reactive({
  name: props.view,
  set(name) {
    emit("update:view", name);
    view.name = name;
  },
});

const emit = defineEmits(["update:view"]);

import { useTitle } from "@vueuse/core";
const title = useTitle();

import { useDisplay } from "vuetify";
const display = useDisplay();

import { useSwipe } from "@vueuse/core";

const nav = reactive({
  drawer: null,
  items: [
    { title: "Home", to: "/admin" },
    { title: "Pages", to: "/admin/page" },
    { title: "User", to: "/admin/user" },
    { title: "Test", to: "/admin/test" },
  ],
});

const layout = reactive({
  headerShow: true,
  footerShow: true,
  vTouch: {
    up: () => {
      layout.headerShow = false;
      layout.footerShow = true;
    },
    down: () => {
      layout.headerShow = true;
      layout.footerShow = false;
    },
  },
});

const defaultsProvider = {
  VTextField: {
    variant: "outlined",
  },
  // VNavigationDrawer: { border: 0 },
  ...props.defaultsProvider,
};

const slotBind = (merge = {}) => {
  return {
    defaultsProvider,
    view,
    ...merge,
  };
};

defineExpose({ view });
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.v-app-layout {
  * {
    font-family: "Public Sans", sans-serif;
  }

  &__navigation .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }

  &__bg-pattern {
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
}
</style>
