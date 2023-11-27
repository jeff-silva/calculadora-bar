<template>
  <v-list v-if="props.deep == 0" density="compact">
    <v-nav :items="items" :deep="props.deep + 1" />
  </v-list>

  <template v-else>
    <template v-for="(_item, i) in items">
      <template v-if="!isObject(_item)">
        <v-divider></v-divider>
      </template>

      <template v-else-if="_item.children.length > 0">
        <v-list-group>
          <template #activator="bind">
            <v-list-item v-bind="{ ...bind.props, ..._item.bind }">
              {{ _item.title }}
            </v-list-item>
          </template>

          <v-nav :items="_item.children" :deep="props.deep + 1" />
        </v-list-group>
      </template>

      <template v-else>
        <v-list-item v-if="_item.condition(_item)" v-bind="_item.bind">
          {{ _item.title }}
        </v-list-item>
      </template>
    </template>
  </template>
</template>

<script setup>
import { defineProps, computed } from "vue";
import _ from "lodash";

const props = defineProps({
  items: { type: Array, default: () => [] },
  deep: { type: Number, default: 0 },
});

const isObject = (item) => {
  return _.isPlainObject(item);
};

const getItem = (item) => {
  item = {
    title: "",
    to: null,
    icon: null,
    bind: {},
    condition: () => true,
    children: [],
    ...item,
  };

  if (item.to) item.bind.to = item.to;
  if (item.icon) item.bind.prependIcon = item.icon;
  return item;
};

const items = computed(() => props.items.map(getItem));
</script>
