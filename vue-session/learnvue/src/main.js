import { createApp, provide, ref } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router";

const app = createApp(App);
//persist data
const pinia = createPinia();
app.use(pinia);
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.component("BootstrapIcon", BootstrapIcon);
app.mount("#app");
