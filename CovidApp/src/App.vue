<script setup>
import { storeToRefs } from "pinia";
import { useCovidStore } from "./stores/counter";
const covidDatadATA = useCovidStore();
const { dataCovid, select, filterData } = storeToRefs(covidDatadATA);
</script>
<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center pt-5">
          <h1>World COVID19 Information</h1>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-8 text-start">
          <h4 v-for="val in filterData" :key="val.name">
            <span class="fst-italic">Total Population of Country: </span>
            <strong> {{ val.population }}</strong>
          </h4>
        </div>
        <div class="col-4 text-center">
          <div class="d-flex justify-content-between align-items-center">
            <label for="form-select">Select Country:</label>
            <select
              class="form-select rounded-pill shadow-sm border-0 w-50"
              v-model="select"
              aria-label="Country Name"
            >
              <option
                v-for="(item, index) in dataCovid"
                :key="index"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 mb-4">
          <div class="card bg-primary py-3">
            <div class="card-body">
              <h5 class="mb-3 fst-italic">State</h5>
              <h2
                class="fw-bold text-light"
                v-for="val in filterData"
                :key="val.name"
              >
                {{ val.name }}
              </h2>
            </div>
          </div>
        </div>
        <div class="col-4 mb-4">
          <div class="card bg-success py-3 shadow border-0">
            <div class="card-body">
              <h5 class="mb-3 fst-italic">Total Recoverd</h5>
              <h2
                class="fw-bold text-light"
                v-for="val in filterData"
                :key="val.name"
              >
                {{ val.latest_data.recovered }}
              </h2>
            </div>
          </div>
        </div>
        <div class="col-4 mb-4">
          <div class="card bg-warning py-3 shadow border-0">
            <div class="card-body">
              <h5 class="mb-3 fst-italic">Total Confirmed</h5>
              <h2
                class="fw-bold text-light"
                v-for="val in filterData"
                :key="val.name"
              >
                {{ val.latest_data.confirmed }}
              </h2>
            </div>
          </div>
        </div>
        <div class="col-4 mb-4">
          <div class="card bg-danger py-3 shadow border-0">
            <div class="card-body">
              <h5 class="mb-3 fst-italic">Total Critical</h5>
              <h2
                class="fw-bold text-white"
                v-for="val in filterData"
                :key="val.name"
              >
                {{ val.latest_data.critical }}
              </h2>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card bg-info py-3 shadow border-0">
            <div class="card-body">
              <h5 class="mb-3 fst-italic">Total Death</h5>
              <h2
                class="fw-bold text-light"
                v-for="val in filterData"
                :key="val.name"
              >
                {{ val.latest_data.deaths }}
              </h2>
            </div>
          </div>
        </div>
        <div class="col-4 mb-4">
          <div class="card bg-secondary py-3 shadow border-0">
            <div class="card-body">
              <h5 class="mb-3 fst-italic">Last Updated</h5>
              <h2
                class="fw-bold text-light"
                v-for="val in filterData"
                :key="val.name"
              >
                {{
                  new Date(val.updated_at)
                    .toLocaleDateString()
                    .replace(/\//g, "-")
                }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
@import "./assets/base.css";
</style>
