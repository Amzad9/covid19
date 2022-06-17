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
  placeholder: {
    typr: String,
  },
});
</script>
<template>
  <input
    :type="type"
    :name="name"
    :id="id"
    autocomplete="given-name"
    :class="class"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
