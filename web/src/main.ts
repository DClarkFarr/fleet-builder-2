import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

import webRouter from "./router/webRouter";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(webRouter);
app.use(pinia);

app.mount("#app");
