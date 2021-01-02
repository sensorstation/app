export const time = {
  state: {
    time: {},
  },
  getters: {
    time(state) {
      return state.time;
    },
  },
  mutations: {
    setTime(state, payload) {
      state.time = payload;
    },
  },
  actions: {
    setTime(context, payload) {
      context.commit("setTime", payload);
    },
  },
};
