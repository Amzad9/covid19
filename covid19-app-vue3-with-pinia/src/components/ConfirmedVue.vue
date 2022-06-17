<script setup>
const props = defineProps({
  items: Array,
});
</script>
<template>
  <div class="card bg-warning py-3 shadow border-0">
    <div class="card-body">
      <h5 class="mb-3 fst-italic">Confirmed</h5>
      <h2
        class="fw-bold text-light"
        v-for="(val, index) in props.items"
        :key="index"
      >
        {{ val.latest_data.confirmed }}
      </h2>
    </div>
  </div>
</template>
