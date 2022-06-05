<script setup>
import { storeToRefs } from "pinia";
import { useCovidStore } from "./stores/counter";
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
const { dataCovid, filterData } = storeToRefs(covidDatadATA);
</script>
<template>
  <main>
    <div class="container">
      <HeaderVueVue name="Global Covid19 Tracker" />
      <div class="row my-5 align-items-center mx-0">
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
    </div>
  </main>
</template>
<style lang="scss">
@import "./assets/base.scss";
$primary: #9BA3EB;
$danger: #916BBF;
$success: #80ED99;
$warning: #E9A6A6;
$info: #FB5B5A;
$secondary: #FCA652;

$body-bg: #f3f3f0;

//@import "bootstrap";
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
