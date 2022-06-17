<script setup>
import { defineProps } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
defineProps(["icon", "size"]);
</script>
<template>
  <BootstrapIcon :icon="icon" :size="size" flip-v />
</template>
