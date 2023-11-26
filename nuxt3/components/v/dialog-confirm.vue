<template>
  <v-dialog>
    <template #activator="bind">
      <slot name="activator" v-bind="bind">
        <v-btn text="Confirm" v-bind="bind.props" />
      </slot>
    </template>

    <v-card>
      <v-card-title>Aa</v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text="Ok" class="bg-success" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: [String],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
