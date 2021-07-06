export const cameras = {
  state: {
    cameras: {},
  },
  getters: {
    getCameras(state) {
      return state.cameras;
    },
  },
  mutations: {
    setCameras(state, payload) {
      state.cameras = payload;
    },
  },
  actions: {
    setCameras(context, payload) {
      context.commit("setCameras", payload);
    },
  },
};
