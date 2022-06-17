import { reactive, watchEffect } from "vue";

const state = reactive({
  count: 0,
  isPopUpOpen: false,
  // increment(){
  //   count++,
  // }
});

const method = {
  increment() {
    state.count++;
  },
  openModal() {
    state.isPopUpOpen = true;
  },
};

export default {
  state,
  method,
};
