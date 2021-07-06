import Vue from "vue";
import Vuex from "vuex";

import { cameras } from "@/store/modules/cameras.js";
import { count } from "@/store/modules/count";
import { time } from "@/store/modules/time.js";
import { websocket } from "@/store/modules/websocket.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cameras,
    count,
    time,
    websocket,
  },
  state: {},
  mutations: {},
  actions: {},
});

export default store;
