<template>
  <DoughnutChart
    :chartData="data"
    :options="option"
    cssClasses="chat-container"
  />
</template>
<script setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { useCovidStore } from "../../stores/covid";
const result = useCovidStore();
const { world } = storeToRefs(result);
const { updated, active, cases } = world.value;
console.log("world", world.value);
import {
  Chart,
  DoughnutController,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, CategoryScale, LinearScale);

// const dataValue = ref([1, 2, 5, 7, 2, 4, 6], [1, 5, 2, 6, 3, 7, 6]);
const data = computed(() => ({
  labels: ["updated", "Active", "Cases"],
  datasets: [
    {
      label: "Updated",
      data: [updated, active, cases],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      borderColor: "white",
      borderWidth: 1,
    },
  ],
}));

const option = ref({
  plugins: {
    title: {
      text: "doughnut",
      data: data,
    },
  },
});
</script>
