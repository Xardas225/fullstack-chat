import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: "868028817462-c4l5b1305hb4buc4d32v5qjtjbgha98f.apps.googleusercontent.com"
})

app.mount("#app");
