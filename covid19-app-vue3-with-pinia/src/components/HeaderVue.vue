<script setup>
const props = defineProps({
  name: String,
});
</script>
<template>
  <div class="row">
    <div class="col-12 text-center py-5">
      <h1>{{ props.name }}</h1>
    </div>
  </div>
</template>
