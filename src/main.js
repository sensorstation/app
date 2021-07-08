import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueNativeSock from "vue-native-websocket";

//Vue.use(VueNativeSock, `ws://${process.env.VUE_APP_WEBSOCKET_API_URL}/ws`, {
Vue.use(VueNativeSock, `ws://10.24.10.10:8000/ws`, {
  store: store,
  format: "json",
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
