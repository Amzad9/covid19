<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import Button from "../components/Button/Button.vue";

import { useTenantStore } from "../stores/tenantStore";
const store = useTenantStore();
const { state, filterData } = storeToRefs(store);
// onMounted(()=>{
//   console.log("Inner",filterData.value)
// });
</script>

<template>
  <div class="mt-10 sm:mt-5 m-5 border shadow-sm rounded-md">
    <div class="md:grid md:grid-cols-2 md:gap-6">
      <div class="mt-3 md:mt-0 md:col-span-2">
        <table
          class="border-collapse table-fixed w-full text-md bg-gray-50 text-dark text-left"
        >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Street Address</th>
              <th>city</th>
              <th>Postal Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filterData" :key="item.id">
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.streetAddress }}</td>
              <td>{{ item.city }}</td>
              <td>{{ item.postalCode }}</td>
              <td>
                <Button
                  title="Delete"
                  class="bg-red-400 px-1 py-1"
                  @click="store.onDelete(index)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang="css">
table th,
table td {
  @apply font-medium p-2;
}
table th {
  @apply bg-gray-50 text-black;
}
table tr:nth-child(even) {
  @apply bg-gray-50;
}
table tr:nth-child(odd) {
  @apply bg-white;
}
table td {
  @apply font-thin p-2;
}
</style>
>
