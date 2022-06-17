<script setup>
import { onMounted, reactive, ref, watch, watchEffect } from "vue";
const x = ref(0);
const y = ref(0);
const a = ref(0);
const b = ref(0);

const obg = reactive({
  firstname: "",
  lastName: "",
});

//single ref

// watch(x, (newX, oldV) => {
//   console.log(`new is ${newX}`);
//     console.log(`old is ${oldV}`);

// });

//getter
// watch(
//   () => x.value + y.value,
//   (total) => {
//     console.log(`sum of x + y is: ${total}`);
//   }
// );

// array of multiple sources
// watch(
//   [x, y, a, b],
//   ([newX, newY, newA, newB], [prevX, prevY, prevA, prevB]) => {
//     console.log(
//       `Prev values = x is ${prevX} and y is ${prevY} and a is ${prevA} or b is ${prevB}`
//     );
//     console.log(
//       `New values = x is ${newX} and y is ${newY} and a is ${newA} or b is ${newB}`
//     );
//   }
// );


// The callback is called whenever `refA` changes.
// watch(refA, () => {
//   console.log(refA.value);
//   console.log(refB.value);
// });

// // The callback is called immediately, and
// // whenever `refA` or `refB` changes ...
watchEffect(() => {
  console.log(obg);
});

onMounted(()=>{
  console.log("mounted");
});

// // ... this is the same behavior as for `computed()`.
// const aPlusB = computed(() => {
//   console.log(refA.value);
//   console.log(refB.value);
//   return refA.value + refB.value;
// });
</script>
<template>
  <div class="p-7 bg-gray-50 m-5">
    <input class="m-2 p-1 border rounded" type="text" v-model="x" />
    <input class="m-2 p-1 border rounded" type="text" v-model="y" />
    <input class="m-2 p-1 border rounded" type="text" v-model="a" />
    <input class="m-2 p-1 border rounded" type="text" v-model="b" />
    {{ x + y + a + b }}
  </div>
</template>
