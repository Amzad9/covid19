<script setup>
const props = defineProps({
  items: {
    type: Array,
  },
});
</script>
<template>
  <div class="card">
    <div class="card-body">
      <h5>State</h5>
      <h2 class="fw-bold">
        {{ props.item }}
      </h2>
    </div>
  </div>
</template>
