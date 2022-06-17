<script setup>
import { ref, reactive, computed } from "vue";

// const text = ref("we are Welcome");
// const id = ref(45);
const ok = ref(true)

const num = ref(0);

const a = ref(5);
const b = ref(8);

const author = reactive({
  count: 0,
});

function increment() {
  num.value++;
}
//computed
const publishedBooksMessage = computed(() => {
  let res = a.value + b.value;
  return ++res;
});

const obj = ref(["Rahul","rana","Robin"])

const theme = {
  color: "red",
};
</script>

<template>
  <div class="p-5">
     <!-- <p>
      <span :class="classes.red"> Using v-html directive: </span>
    </p> -->
    <!-- <div :id="`list-${id}`">Welcome</div> -->
    <!-- <div>{{ publishedBooksMessage }}</div>
    <button @click="increment">increment</button> -->
    <ul>
        <li v-for="item in obj">
            {{ item }}
        </li>
    </ul>
  </div>
</template>
<style>
.red {
  color: red;
}
</style>
