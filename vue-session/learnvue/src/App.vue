<script setup>
import { provide, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NavigationVue from "./components/Navigation.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";

const count = ref(0);

function increment() {
  count.value++;
}
function decrement() {
  if (count.value !== 0) {
    count.value--;
  }
}

provide("counter", {
  count,
  increment,
  decrement,
});
</script>

<template>
  <div class="controller-container relative overflow-hidden h-screen">
    <div class="main-page absolute w-full">
      <header class="bg-neutral-300 fixed top-0 w-full z-30">
        <NavigationVue />
      </header>
      <div class="flex items-stretch max-h-full contaent-wrapper mt-14">
        <div class="basis-1/3 md:basis-1/6 bg-white shadow-2xl">
          <Sidebar />
        </div>
        <div
          class="flex-1 scroll-py-0.5 snap-y scroll-auto overflow-y-scroll contaent-wrapper"
        >
          <main>
            <RouterView />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
@import "@/assets/base.css";
/* .app{
  @apply h-screen;
} */
.contaent-wrapper {
  height: calc(100vh - 60px);
}
</style>
