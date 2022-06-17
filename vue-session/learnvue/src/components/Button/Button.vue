<script setup>
import { defineProps } from "vue";
defineProps({
  class: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <button
    @click="$emit('click')"
    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-100 focus:outline-none hover:bg-slate-900"
    :class="class"
  >
    {{ title }}
  </button>
</template>
