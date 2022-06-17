<template>
  <BarChart :chartData="data" :options="option" cssClasses="chat-container" />
</template>
<script setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { BarChart } from "vue-chart-3";
import { useCovidStore } from "../../stores/covid";
const result = useCovidStore();
const { world } = storeToRefs(result);
const { updated, active, cases } = world.value;
console.log("world", world.value);
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

Chart.register(BarController, CategoryScale, LinearScale, BarElement);

const dataValue = ref([1, 2, 5, 7, 2, 4, 6], [1, 5, 2, 6, 3, 7, 6]);
const data = computed(() => ({
  labels: ["updated", "Active","Cases"],
  datasets: [
    {
      label: "Updated",
      data: [updated,active, ],
      backgroundColor: "red",
      borderColor: "white",
      borderWidth: 1,
    },
    {
      label: "Active",
      data: [active],
      backgroundColor: "green",
      borderColor: "white",
      borderWidth: 1,
    },
    {
      label: "Cases",
      data: [cases],
      backgroundColor: "yellow",
      borderColor: "white",
      borderWidth: 1,
    },
  ],
}));
const option = ref({
  plugins: {
    title: {
      text: "bar",
    },
  },
});
</script>
