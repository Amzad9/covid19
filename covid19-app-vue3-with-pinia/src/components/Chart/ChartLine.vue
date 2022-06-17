<template>
  <LineChart :chartData="data" :options="option" cssClasses="chat-container" />
</template>
<script setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { LineChart } from "vue-chart-3";
import { useCovidStore } from "../../stores/covid";
const result = useCovidStore();
const { world } = storeToRefs(result);
const { updated, active, cases } = world.value;
console.log("world", world.value);
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, CategoryScale);

// const dataValue = ref([1, 2, 5, 7, 2, 4, 6], [1, 5, 2, 6, 3, 7, 6]);
const data = computed(() => ({
  labels: ["updated", "Active", "Cases"],
  datasets: [
    {
      label: "Updated",
      data: [updated, active, cases],
      fill: false,
      tension: 0.1,
      hoverOffset: 4,
      borderColor: "white",
      borderWidth: 1,
    },
  ],
}));

const option = ref({
  plugins: {
    title: {
      text: "line",
      data: data,
    },
  },
});
</script>
