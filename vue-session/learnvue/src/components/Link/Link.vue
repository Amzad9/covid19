<script setup>
import { defineProps } from "vue";
import { BeakerIcon } from "@heroicons/vue/outline";

defineProps({
  to: {
    type: String,
  },
  class: {
    type: String,
  },
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
});
</script>
<template>
  <RouterLink :to="to" :class="class" role="menuitem" :id="id">
    <slot></slot>
  </RouterLink>
</template>
