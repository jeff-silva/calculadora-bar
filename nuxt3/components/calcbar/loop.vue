<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel title="aaa">
        <v-expansion-panel-text>
          <div>aa</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="aaa">
        <v-expansion-panel-text>
          <div>aa</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="aaa">
        <v-expansion-panel-text>
          <div>aa</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="aaa">
        <v-expansion-panel-text>
          <div>aa</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <pre>{{ props }}</pre>
  </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: { type: [Array], default: () => [] },
});

const emit = defineEmits(["update:modelValue"]);
</script>
