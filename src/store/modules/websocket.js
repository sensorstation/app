export const websocket = {
  state: {
    isConnected: false,
    reconnectError: false,
    message: {},
    sensors: {},
  },
  getters: {
    getSensorData(state) {
      return state.sensors;
    },
  },
  mutations: {
    SOCKET_ONOPEN(state) {
      console.log("Socket is open.");
      state.isConnected = true;
    },
    SOCKET_ONCLOSE(state) {
      console.log("Socket is closed.");
      state.isConnected = false;
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event);
    },

    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      state.message = message;
      state.sensors = {
        ...state.sensors,
        [message.K]: message.V,
      };
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count);
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.reconnectError = true;
    },
  },
};
