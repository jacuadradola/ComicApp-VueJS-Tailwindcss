import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import ApiService from "@/services/api.service";

ApiService.init();

createApp(App).use(router).mount("#app");
