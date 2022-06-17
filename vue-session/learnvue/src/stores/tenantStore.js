import { defineStore } from "pinia";
import { reactive, watch, watchEffect, ref, onMounted, computed } from "vue";
// export const useTenantStore = defineStore({
//   id: "tenant",
//   state: () => ({
//     firstName: "",
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

export const useTenantStore = defineStore(
  "tenent",
  () => {
    const state = reactive({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      tenantData: [],
      getTenentData: null,
      search: "",
    });

    // const double = computed(() => count.value * 2);
    const onSubmitTenant = () => {
      const newData = {
        id: Math.floor(Math.random() * 1000),
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        country: state.country,
        streetAddress: state.streetAddress,
        city: state.city,
        postalCode: state.postalCode,
      };
      state.tenantData = [...state.tenantData, newData];
      localStorage.setItem("addtenant", JSON.stringify(state.tenantData));
    };
    const filterData = computed(() => {
      return state.tenantData.filter((val) =>
        val.firstName.toLowerCase().includes(state.search.toLowerCase())
      );
    });

    const onDelete = (idx) => {
      console.log(idx);
      state.tenantData = JSON.parse(localStorage.getItem("addtenant"));
      state.tenantData.splice(idx, 1);
      localStorage.setItem("addtenant", JSON.stringify(state.tenantData));
    };

    onMounted(() => {
      const check = localStorage.getItem("addtenant");
      if (check) {
        state.tenantData = JSON.parse(check);
      }
    });
    // watchEffect(() => {
    //   const check = localStorage.getItem("addtenant");
    //   if (check) {
    //     state.tenantData = JSON.parse(check);
    //   }
    //   // console.log("filterData", filterData.value)
    // });

    //It automatically tracks every reactive property accessed during its synchronous execution.
    //when I want to watch multiple reactive properties and I don't care about old values
    // watchEffect(
    //   () => {
    //     console.log(state.tenantData);
    //   },
    //   { deep: true }
    // );

    //when I want to watch one specific reactive properties and I may want old value
    //reactive watch state.tenantData
    // watch(
    //   () => state.tenantData,
    //   (newValue, oldValue) => {
    //     console.log("newValue", newValue);
    //     console.log("oldValue", oldValue);
    //   },
    //   { deep: true }
    // );

    // watch(
    //   () => state.tenantData,
    //   (newValue, oldValue) => {
    //     console.log("oldValue", oldValue);
    //     console.log("newValue", newValue);
    //   }
    // );

    return {
      state,
      onSubmitTenant,
      onDelete,
      filterData,
    };
  },
  {
    persist: true,
  }
);
