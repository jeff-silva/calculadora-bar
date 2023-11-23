<template>
  <v-text-field v-model="fakeValue" ref="inputRef" />
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, onMounted } from "vue";
import IMask from "imask";

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const moneyFormat = (number) => {
  return Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(number).replace(" €", "");
};

const fakeValue = computed({
  get: () => moneyFormat(props.modelValue),
  set: (value) => {
    if (!imask) return;
    imask.masked.value = input.value;
    imask.updateOptions(settings);
    imask._onChange();
    value = parseFloat((value || "").replace(/[^0-9]/g, "")) / 100;
    emit("update:modelValue", value);
  },
});

const inputRef = ref(null);

let imask, input;
let settings = {
  mask(value) {
    this._value = moneyFormat((value || "").replace(/[^0-9]/g, "") / 100);
  },
};

onMounted(() => {
  const el = inputRef.value.$el;
  input = el.tagName == "INPUT" ? el : el.querySelector("input");
  imask = IMask(input, settings);
});
</script>
