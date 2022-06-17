<script setup>
import { ref } from "vue";
import { onClickOutside } from '@vueuse/core'
import Link from "../Link/Link.vue";

const toggle = ref(false);

const el = ref();

const toggleTriger = () => {
  toggle.value = !toggle.value;
};

onClickOutside(el, toggleTriger);

const profileItem = ref([
  { id: "1", name: "Profile", to: "profile" },
  { id: "2", name: "About Us", to: "about" },
  { id: "3", name: "Logout", to: "Logout" },
]);
</script>

<template>
<Transition name="slide-fade">
  <div class="ml-3 relative">
    <div>
      <button
        type="button"
        class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        @click="toggleTriger"
      >
        <span class="sr-only">Open user Profile</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
    <div
      v-if="toggle"
      ref="el"
      class="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <!-- Active: "bg-gray-100", Not Active: "" -->
      <ul class="m-0 p-0">
        <li v-for="(navItem, index) in profileItem" :key="navItem.id">
          <Link
            :to="navItem.to"
            :class="[index == 2 ? 'border-b-0' : '','text-gray-700 block bg-white px-4 py-2 text-sm border-solid border-b border-silver-500']"
            :id="navItem.id"
          >
           <span>{{ navItem.name }}</span>
          </link>
        </li>
      </ul>
    </div>
  </div>
  </Transition>
</template>
