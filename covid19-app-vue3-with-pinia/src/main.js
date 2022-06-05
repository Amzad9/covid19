import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
// import "bootstrap/dist/css/bootstrap.min.css";
const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
pinia.use(piniaPluginPersistedstate);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
