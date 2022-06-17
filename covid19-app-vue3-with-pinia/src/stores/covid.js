import { defineStore } from "pinia";
import axios from "axios";
import { ref, onMounted, computed, watch } from "vue";
//https://data.covid19india.org/v4/min/data.min.json
//https://data.covid19india.org/data.json
//https://corona-api.com/countries
//https://disease.sh/v3/covid-19/all

export const useCovidStore = defineStore(
  "covidData",
  () => {
    const dataCovid = ref([]);
    const world = ref([]);
    const select = ref("Afghanistan");
    const countryData = async () => {
      const res = await axios.get("https://corona-api.com/countries");
      dataCovid.value = res.data.data;
      console.log(dataCovid.value);
    };
    const filterData = computed(() => {
      return dataCovid.value.filter((val) =>
        val.name.toLowerCase().includes(select.value.toLowerCase())
      );
    });
    const worlswideData = async () => {
      const res = await axios.get("https://disease.sh/v3/covid-19/all");
      world.value = res.data;
      console.log("updated");
    };
    onMounted(() => {
      countryData();
      worlswideData();
    });
    
    watch(
      () => select.value,
      () => {
        console.log(select.value);
      },
      { deep: true }
    );
    return { dataCovid, select, filterData, world };
  },
  {
    persist: true,
  }
);

// export const useCounterStore = defineStore({
//   id: "counter",
//   state: () => ({
//     counter: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//   },
//   actions: {
//     increment() {
//       this.counter++;
//     },
//   },
// });
