<script setup>
import { ref } from "vue";
import reactive from "../../reactive/index";
import Link from "../Link/Link.vue";
import IconItem from "../icons/IconItem.vue";
import Button from "../Button/Button.vue";
const navigation = ref([
  { id: "1", name: "Tenant", to: "/", icon: 'filter-left' },
  { id: "2", name: "CssModule", to: "cssModule", icon: 'filter-left' },
  { id: "3", name: "application", to: "product", icon: 'filter-left' },
  { id: "4", name: "scope", to: "scope", icon: 'filter-left' },
  { id: "5", name: "target and operation", to: "target", icon: 'filter-left' },
  { id: "6", name: "Role", to: "Role", icon: 'filter-left' },
  { id: "7", name: "Ref", to: "ref", icon: 'filter-left' },
  { id: "8", name: "Watch & WatchEffect", to: "watch", icon: 'filter-left' },
]);
</script>
<template>
  <ul>
    <li v-for="navItem in navigation" :key="navItem.id">
      <Link
        :to="navItem.to"
        class="text-gray-700 flex items-center bg-white px-4 py-2 text-sm border-solid border-b border-silver-500 hover:bg-blue hover:text-white hover:pl-3 transition-all capitalize"
        :id="navItem.id"
      >
      <IconItem :icon="navItem.icon" size="md"/>
      <span class="ml-2">{{ navItem.name }}</span>
      </link>
    </li>
    <li>
      <Button title="About us" class="w-full about-us-btn" @click="reactive.method.openModal"/>
    </li>
  </ul>
</template>
<style lang="css" scoped>
.about-us-btn{
  @apply bg-white text-black text-left font-normal block;
}
</style>>
