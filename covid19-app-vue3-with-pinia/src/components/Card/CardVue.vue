<script setup>
const props = defineProps({
  class: {
    type: String,
  },
  classBody: {
    type: String,
  },
});
</script>
<template>
  <div :class="props.cardClass">
    <div :class="props.classBody">
      <slot></slot>
    </div>
  </div>
</template>
