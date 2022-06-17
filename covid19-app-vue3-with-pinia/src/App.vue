<script setup>
import { storeToRefs } from "pinia";
import Chart from "./components/Chart.vue";
import { useCovidStore } from "./stores/covid";
import HeaderVueVue from "./components/HeaderVue.vue";
import PopulationVue from "./components/Population.vue";
import SelectCountry from "./components/SelectCountry.vue";
import StateVue from "./components/StateVue.vue";
import RecoverdVue from "./components/RecoverdVue.vue";
import ConfirmedVue from "./components/confirmedVue.vue";
import Critical from "./components/Critical.vue";
import Death from "./components/Death.vue";
import Updated from "./components/Updated.vue";
const covidDatadATA = useCovidStore();
const { dataCovid, filterData, world } = storeToRefs(covidDatadATA);
</script>
<template>
  <main>
    <div class="container-xxl">
      <HeaderVueVue name="Covid19 Tracker" />

      <div class="row">
        <div class="col-12 col-md-8">
          <div class="row mb-5 align-items-center mx-0">
            <PopulationVue :items="filterData" />
            <SelectCountry :items="dataCovid" />
          </div>
          <div class="row">
            <div class="col-12 col-md-4 mb-4">
              <StateVue :items="filterData" />
            </div>
            <div class="col-12 col-md-4 mb-4">
              <RecoverdVue :items="filterData" />
            </div>
            <div class="col-12 col-md-4 mb-4">
              <ConfirmedVue :items="filterData" />
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Critical :items="filterData" />
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Death :items="filterData" />
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Updated :items="filterData" />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
               <Chart />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <h4>Global Cases</h4>
          <div class="scroll">
            <table class="table table-striped">
              <tbody>
                <tr v-for="(item, key, index) in world" :key="key">
                  <td>
                    <span class="text-capitalize">{{ key }}</span>
                  </td>
                  <td>{{ item }}</td>
                </tr>
              </tbody>
            </table>
          </div>
         
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
@import "./assets/base.scss";
$primary: #9ba3eb;
$danger: #916bbf;
$success: #80ed99;
$warning: #e9a6a6;
$info: #fb5b5a;
$secondary: #fca652;

$body-bg: #f3f3f0;

.scroll {
  overflow-y: scroll;
  height: 400px;
}

//@import "bootstrap";
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
