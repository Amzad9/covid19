<script setup>
const props = defineProps({
  items: String,
});
</script>
<template>
  <div class="card bg-primary py-3">
    <div class="card-body">
      <h5 class="mb-3 fst-italic">State</h5>
      <h2
        class="fw-bold text-light"
        v-for="(val, index) in props.items"
        :key="index"
      >
        {{ val.name }}
      </h2>
    </div>
  </div>
</template>
