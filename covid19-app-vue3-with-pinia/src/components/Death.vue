<script setup>
const props = defineProps({
  items: String,
});
</script>
<template>
  <div class="card bg-info py-3 shadow border-0">
    <div class="card-body">
      <h5 class="mb-3 fst-italic">Deaths</h5>
      <h2
        class="fw-bold text-light"
        v-for="(val, index) in props.items"
        :key="index"
      >
        {{ val.latest_data.deaths }}
      </h2>
    </div>
  </div>
</template>
