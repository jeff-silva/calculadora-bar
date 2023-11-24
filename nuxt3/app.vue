<template>
  <div>
    <v-defaults-provider :defaults="defaults">
      <nuxt-page />
    </v-defaults-provider>
  </div>
</template>

<script setup>
const defaultsInput = {
  variant: "outlined",
  density: "compact",
};

const defaults = {
  VTextField: defaultsInput,
  VSelect: defaultsInput,
  VTextarea: defaultsInput,
};
</script>
