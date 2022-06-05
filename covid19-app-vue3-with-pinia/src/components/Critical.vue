<script setup>
const props = defineProps({
  items: String,
});
</script>
<template>
  <div class="card bg-danger py-3 shadow border-0">
    <div class="card-body">
      <h5 class="mb-3 fst-italic">Critical</h5>
      <h2
        class="fw-bold text-light"
        v-for="(val, index) in props.items"
        :key="index"
      >
        {{ val.latest_data.critical }}
      </h2>
    </div>
  </div>
</template>
