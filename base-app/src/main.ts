import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import microApp from "@micro-zoe/micro-app";

createApp(App).use(router).mount("#app");

microApp.start({
  // "disable-memory-router": true, // 关闭虚拟路由
});
// microApp.start()

// http://localhost:8080/about?app1=%2F%23%2Fabout
// http://localhost:8080/about/#/about
