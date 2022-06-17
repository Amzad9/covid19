<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import UserProfile from "./Profile/UserProfile.vue";
</script>
<template>
  <nav class="flex justify-between bg-white border-b py-2 px-4">
    <div>
      <RouterLink to="/"> 
        <img src="@/assets/logo.svg" class="h-8" />
      </RouterLink>
    </div>  
    <UserProfile />
  </nav>
</template>
