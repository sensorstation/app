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
    setCameras(state, cams) {
      state.cameras = cams;
    },
  },
  actions: {
    setCameras(context, payload) {
      context.commit("setCameras", payload.cameras);
    },
  },
};
