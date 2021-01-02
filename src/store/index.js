import Vue from "vue";
import Vuex from "vuex";

import { time } from "@/store/modules/time.js";
import { count } from "@/store/modules/count";
import { websocket } from "@/store/modules/websocket.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    time,
    count,
    websocket,
  },
  state: {},
  mutations: {},
  actions: {},
});

export default store;
