<template>
  <v-card elevation="3" class="ma-1">
    <v-card-text v-if="props.cardText">
      <slot name="default"></slot>
    </v-card-text>

    <div v-if="!props.cardText">
      <slot name="default"></slot>
    </div>

    <v-defaults-provider :defaults="defaults">
      <div class="d-flex align-items justify-end" style="gap: 2px; background: #f7f7f708">
        <slot name="actions"></slot>
      </div>
    </v-defaults-provider>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  cardText: { type: [Boolean], default: true },
});

const defaults = {
  VBtn: { rounded: 0, height: 35 },
};
</script>
