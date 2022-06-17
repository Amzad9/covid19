<script setup>
import { defineProps } from "vue";
defineProps({
  type: {
    type: String,
  },
  id: {
    type: String,
  },
  class: {
    type: String,
  },
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  titles: {
    type: Array,
  },
});
</script>
<template>
  <select
    @input="$emit('update:modelValue', $event.target.value)"
    :id="id"
    :name="name"
    autocomplete="country-name"
    :class="class"
  >
    <option @click="$emit('optionClick')"  :value="title" v-for="(title, key, index) in titles" :key="index">
      {{ title }}
    </option>
  </select>
</template>
