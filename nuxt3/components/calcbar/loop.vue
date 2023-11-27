<template>
  <div>
    <div v-if="items.data.length == 0" class="text-center text-disabled py-3">Nenhum item criado</div>

    <v-expansion-panels v-if="props.accordion" v-model="items.focus" :static="true" variant="accordion">
      <template v-for="(o, i) in items.data">
        <v-expansion-panel :title="o[props.itemTitle] || `Item #${i + 1}`" :value="o" rounded="0" elevation="0">
          <v-expansion-panel-text style="margin: -8px -24px -16px">
            <div class="pa-3 pt-6">
              <slot name="item" v-bind="slotBind({ item: o, index: i })"></slot>
            </div>
            <v-defaults-provider :defaults="{ VBtn: { rounded: 0 } }">
              <div class="d-flex align-items justify-end" style="background: #f7f7f708">
                <v-btn text="Remove" color="red" prepend-icon="mdi-delete" @click="items.delete(o)" />
              </div>
            </v-defaults-provider>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </template>
    </v-expansion-panels>

    <div v-if="!props.accordion">
      <template v-for="(o, i) in items.data">
        <div class="px-3">
          <slot name="item" v-bind="slotBind({ item: o, index: i })"></slot>
        </div>
      </template>
    </div>

    <v-defaults-provider :defaults="{ VBtn: { rounded: 0 } }">
      <div class="d-flex align-items justify-end" style="background: #f7f7f708">
        <slot name="actions" v-bind="slotBind()"></slot>
      </div>
    </v-defaults-provider>
  </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits, defineExpose } from "vue";

const props = defineProps({
  modelValue: { type: [Array], default: () => [] },
  itemTitle: { type: [String], default: "name" },
  default: { type: [Object], default: () => ({}) },
  accordion: { type: [Boolean], default: true },
});

const emit = defineEmits(["update:modelValue"]);

const generateUID = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
};

const items = reactive({
  focus: false,
  data: props.modelValue,
  add() {
    const uid = generateUID();
    items.data.push((items.focus = { uid, ...props.default }));
    emit("update:modelValue", items.data);
  },
  delete(item) {
    if (!confirm("Delete item?")) return;
    const index = items.data.indexOf(item);
    items.data.splice(index, 1);
    emit("update:modelValue", items.data);
    if (items.focus && items.focus == item.uid) {
      items.focus = false;
    }
  },
});

const slotBind = (merge = {}) => {
  return {
    add: items.add,
    delete: items.delete,
    ...merge,
  };
};

defineExpose({
  add: items.add,
  delete: items.delete,
});
</script>
