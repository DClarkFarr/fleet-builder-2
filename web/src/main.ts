import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

import webRouter from "./router/webRouter";

const app = createApp(App);

app.use(webRouter);

app.mount("#app");
