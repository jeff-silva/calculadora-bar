<template>
  <div>
    <v-card :subtitle="form.data.name"></v-card>
    <br />

    <v-card subtitle="Consumos">
      <v-table>
        <colgroup>
          <col width="*" />
          <col width="100" />
        </colgroup>
        <tbody>
          <template v-for="o in form.data.purchases">
            <tr>
              <td class="py-2">
                <div>{{ o.name }}</div>
                <small class="d-block text-disabled">
                  Consumido por
                  {{
                    form.data.users
                      .filter((u) => o.divideBy.includes(u.uid))
                      .map((u) => u.name)
                      .join(", ")
                  }}
                </small>
              </td>
              <td class="py-2">
                <small class="d-block">{{ o.quantity }} x</small>
                <small class="d-block">{{ format.money(o.amount) }}</small>
                <small class="d-block border-t">{{ format.money(o.amount * o.quantity) }}</small>
              </td>
            </tr>
          </template>
        </tbody>
      </v-table>
    </v-card>
    <br />

    <v-card subtitle="Divisão">
      <v-table>
        <colgroup>
          <col width="*" />
          <col width="100" />
        </colgroup>
        <tbody>
          <template v-for="o in form.result.division">
            <tr>
              <td>{{ o.user.name }}</td>
              <td>
                <small>{{ format.money(o.total) }}</small>
              </td>
            </tr>
          </template>
          <tr>
            <td class="text-right">Total:</td>
            <td>
              <small>{{ format.money(form.result.total) }}</small>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

const props = defineProps({
  form: { type: [Object], default: () => ({}) },
});

const emit = defineEmits(["update:modelValue"]);
</script>
