<template>
  <div
    class="v-image-field rounded elevation-2 bg-grey-lighten-3"
    :style="`width: ${props.size}; height: ${props.size};`"
    @click="file.browser()"
  >
    <img v-if="file.preview" :src="file.preview" alt="" />
    <div></div>
  </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: { type: [String], default: "" },
  size: { type: [Number, String], default: "100px" },
});

const emit = defineEmits(["update:modelValue", "fileChange"]);

const file = reactive({
  preview: props.modelValue,
  browser() {
    Object.assign(document.createElement("input"), {
      type: "file",
      onchange: (ev) => {
        if (typeof ev.target.files[0] == "undefined") return;
        const file = ev.target.files[0];
        this.preview = URL.createObjectURL(file);
        emit("fileChange", file);
      },
    }).click();
  },
});
</script>

<style lang="scss">
.v-image-field {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    position: relative;
    z-index: 2;
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
}
</style>
