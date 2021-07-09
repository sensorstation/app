export const cameras = {
  state: {
    cameras: {},
    selectedCamera: {},
  },
  getters: {
    getCameras(state) {
      return state.cameras;
    },
    selectedCamera(state) {
      return state.selectedCamera;
    },
  },
  mutations: {
    setCameras(state, cams) {
      state.cameras = cams;
    },
    selectCamera(state, cam) {
      state.selectedCamera = cam;
    },
  },
  actions: {
    setCameras(context, payload) {
      context.commit("setCameras", payload.cameras);
    },
    selectCamera(context, cam) {
      context.commit("selectCamera", cam);
    },
  },
};
