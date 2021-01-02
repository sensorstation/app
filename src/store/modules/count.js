export const count = {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    count(state) {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementBy(state, payload) {
      state.count += payload;
    },
    decrement(state) {
      state.count--;
    },
  },
};
