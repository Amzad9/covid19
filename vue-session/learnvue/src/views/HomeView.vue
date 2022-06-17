<script setup>
import { ref, toRef } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
const route = useRoute();

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import TenantView from "./TenantView.vue";
import InputItem from "../components/InputItem.vue";
import SelectItem from "../components/SelectItem.vue";
import Button from "../components/Button/Button.vue";
import reactive from "../reactive/index";
import { useTenantStore } from "../stores/tenantStore";
const store = useTenantStore();
// const isPopUpOpen = ref(false);
const open = ref(false);
const { state } = storeToRefs(store);
</script>
<template>
  <div>
    <!-- <button @click="isPopUpOpen = true">Modal</button> -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-300 transform"
        enter-from-class="opacity-0 translate-y-10 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
      >
        <div
          v-show="reactive.state.isPopUpOpen"
          class="modal w-2/6 bg-white shadow-lg p-5 rounded-md"
        >
          <div class="text-center">
            <p>Are you sure?</p>
            <button
              class="p-1 rounded-md mt-5 text-white bg-blue"
              @click="reactive.state.isPopUpOpen = false"
            >
              Close
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
    <div class="grid grid-cols-2 md:px-5 mt-4 items-center">
      <div class="">
        <h2 class="text-2xl">{{ route.name.toUpperCase() }}</h2>
      </div>
      <div class="text-end">
        <InputItem
          type="search"
          name="last-name"
          id="last-name"
          v-model="state.search"
          placeholder="Search"
          class="mt-1 inline-flex mr-4 focus:ring-indigo-500 h-12 border text-gray-700 px-3 focus:border-indigo-500 block shadow-sm sm:text-sm border-sky-300 rounded-md"
        />
        <Button title="New Tenant" @click="open = true" />
      </div>
    </div>

    <TenantView />
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-50" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-200"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel
                  class="pointer-events-auto relative w-screen max-w-md"
                >
                  <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                  >
                    <div
                      class="absolute z-50 top-2 right-3 -ml-8 flex pt-0 pr-2 sm:-ml-10 sm:pr-4"
                    >
                      <button
                        type="button"
                        class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        @click="open = false"
                      >
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div
                    class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                  >
                    <div class="px-4 sm:px-4 py-2 bg-blue">
                      <DialogTitle class="text-lg font-medium text-white">
                        Panel title
                      </DialogTitle>
                    </div>
                    <div class="relative mt-0 flex-1">
                      <form @submit.prevent="store.onSubmitTenant()">
                        <div class="shadow overflow-hidden sm:rounded-md-0">
                          <div class="px-4 py-2 bg-gray-50 sm:p-5 md:px-5">
                            <div class="grid grid-cols-6 gap-2">
                              <div class="col-span-12 sm:col-span-12">
                                <label
                                  for="first-name"
                                  class="block text-sm font-medium text-gray-700"
                                  >First name</label
                                >
                                <InputItem
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  v-model="state.firstName"
                                  class="mt-1 focus:ring-indigo-500 h-12 border text-gray-700 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-300 rounded-md"
                                />
                                {{ state.firstName }}
                              </div>

                              <div class="col-span-12 sm:col-span-12">
                                <label
                                  for="last-name"
                                  class="block text-sm font-medium text-gray-700"
                                  >Last name</label
                                >
                                <InputItem
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  v-model="state.lastName"
                                  class="mt-1 focus:ring-indigo-500 h-12 border text-gray-700 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-300 rounded-md"
                                />
                                {{ state.lastName }}
                              </div>

                              <div class="col-span-12 sm:col-span-12">
                                <label
                                  for="email-address"
                                  class="block text-sm font-medium text-gray-700"
                                  >Email address</label
                                >
                                <InputItem
                                  type="email"
                                  name="email-name"
                                  v-model="state.email"
                                  id="email-name"
                                  class="mt-1 focus:ring-indigo-500 h-12 border text-gray-700 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-300 rounded-md"
                                />
                              </div>

                              <div class="col-span-12 sm:col-span-12">
                                <label
                                  for="country"
                                  class="block text-sm font-medium text-gray-700"
                                  >Country</label
                                >
                                <SelectItem
                                  id="country"
                                  name="country"
                                  v-model="state.country"
                                  class="mt-1 block w-full py-2 px-3 h-12 text-gray-700 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  :titles="['India', 'Canada', 'Japan']"
                                />
                                {{ state.country }}
                              </div>

                              <div class="col-span-12 sm:col-span-12">
                                <label
                                  for="street-address"
                                  class="block text-sm font-medium text-gray-700"
                                  >Street address</label
                                >
                                <InputItem
                                  type="text"
                                  name="street"
                                  v-model="state.streetAddress"
                                  id="street-address"
                                  class="mt-1 focus:ring-indigo-500 h-12 border text-gray-700 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-300 rounded-md"
                                />
                              </div>

                              <div class="col-span-12 sm:col-span-12">
                                <label
                                  for="city"
                                  class="block text-sm font-medium text-gray-700"
                                  >City</label
                                >
                                <InputItem
                                  type="text"
                                  name="city"
                                  v-model="state.city"
                                  id="city"
                                  class="mt-1 focus:ring-indigo-500 h-12 border text-gray-700 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-300 rounded-md"
                                />
                              </div>

                              <div class="col-span-12 sm:col-span-12">
                                <label
                                  for="region"
                                  class="block text-sm font-medium text-gray-700"
                                  >State / Province</label
                                >
                                <InputItem
                                  type="text"
                                  name="region"
                                  v-model="state.state"
                                  id="region"
                                  class="mt-1 focus:ring-indigo-500 h-12 border text-gray-700 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-300 rounded-md"
                                />
                              </div>

                              <div
                                class="col-span-12 sm:col-span-12 lg:col-span-12"
                              >
                                <label
                                  for="postal-code"
                                  class="block text-sm font-medium text-gray-700"
                                  >ZIP / Postal code</label
                                >
                                <InputItem
                                  type="text"
                                  name="postal"
                                  v-model="state.postalCode"
                                  id="postal-code"
                                  class="mt-1 focus:ring-indigo-500 h-12 border text-gray-700 px-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-sky-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="px-4 pb-3 bg-gray-50 text-right sm:px-5">
                            <!-- <button
                              type="submit"
                              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Save
                            </button> -->
                            <Button title="New Tenant" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<style lang="css">
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
