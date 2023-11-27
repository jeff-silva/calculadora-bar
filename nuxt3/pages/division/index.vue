<template>
  <nuxt-layout name="app">
    <template #main>
      <v-table class="elevation-5 rounded">
        <colgroup>
          <col width="*" />
          <col width="10px" />
        </colgroup>
        <tbody>
          <tr v-if="division.data.length == 0">
            <td>
              Você ainda não criou nenhuma divisão.
              <nuxt-link to="/division/new">Começar</nuxt-link>
            </td>
          </tr>
          <template v-for="o in division.data">
            <tr>
              <td>{{ o.name }}</td>
              <td><v-btn icon="mdi-pencil" flat :to="`/division/${o.uid}`" /></td>
            </tr>
          </template>
        </tbody>
      </v-table>
    </template>
  </nuxt-layout>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";
definePageMeta({ middleware: ["auth"] });

const props = defineProps({
  modelValue: {
    type: [String],
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

import useFirebase from "@/composables/useFirebase";
const f = useFirebase();

const division = reactive({
  query: {
    where: [["ownerUID", "==", f.user.uid]],
  },
  data: [],
  async submit() {
    const { query, data } = await f.firestore.search("division", this.query);
    this.query = query;
    this.data = data;
  },
});

division.submit();
</script>
