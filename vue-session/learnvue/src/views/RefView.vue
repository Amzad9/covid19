<script setup>
import { ref, onMounted, watch, inject } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const list = ref(["Apple", "Banana", "Orange"]);

const itemRefs = ref([]);
const name = ref("Helodnsdmf fdsjf");
onMounted(() => console.log(route.name));

//getter
watch(
  () => route.name,
  (name) => {
    console.log(name);
  }
);
const { increment, decrement, count } = inject("counter");
</script>

<template>
  <div class="p-7 bg-gray-50 m-5">
    <h2 class="text-2xl mb-3">{{ route.name.toUpperCase() }}</h2>
    <ul>
      <li
        class="bg-sky-500 mb-1 p-1 rounded-md text-white"
        v-for="item in list"
        ref="itemRefs"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="name"></span></p>
    <div class="mt-5">
      <p class="text-3xl mb-3">{{ count }}</p>
      <button @click="increment" class="bg-red-400 px-1 py-1 mr-2">Increment</button>
      <button @click="decrement" class="bg-red-400 px-1 py-1">Decrement</button>
    </div>
  </div>
</template>
