<script setup>
const props = defineProps({
  items: String,
});
</script>
<template>
  <div class="col-12 col-md-8 text-start">
    <h4 v-for="(val, index) in props.items" :key="index">
      <span class="fst-italic">Total Population of Country: </span>
      <strong> {{ val.population }}</strong>
    </h4>
  </div>
</template>
