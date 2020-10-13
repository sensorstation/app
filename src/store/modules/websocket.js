import Vue from 'vue'

export const state = {
    socket: {
        isConnected: false,
        message: '',
        reconnectError: false,
    }
}

export const mutations = {
    SOCKET_ONOPEN(state, event) {
        console.log("SOCKET OPEN")
        Vue.prototype.$socket = event.currentTarget
        state.socket.isConnected = true
    },

    SOCKET_ONCLOSE(state, event) {
        console.log("SOCKET ON CLOSE")
        console.log(state)
        console.log(event)
        state.socket.isConnected = false
    },

    SOCKET_ONERROR(state, event) {
        console.error("SOCKET ON ERROR")
        console.error(state)
        console.error(event)
    },

    SOCKET_ONMESSAGE(state, msg) {
        console.log("SOCKET_ONMESSAGE Unknown --------------")
        console.error(state)
        console.log(msg)
        state.message = msg
    },

    SOCKET_RECONNECT(state, event) {
        console.log("SOCKET RECONNECT")
        console.log(state)
        console.log(event)
    },

    SOCKET_RECONNECT_ERROR(state) {
        console.log("SOCKET RECONNECT ERROR")
        console.error(state)
        console.error(event)
        state.socket.reconnectError = true
    },
}

export const actions = {
    sendMessage: function(context, message) {
        Vue.prototype.$socket.send(message)
    },
    handleTime: function({ dispatch }, msg) {
        dispatch('setTime', msg.v)
    },
    handleTemp: function({ dispatch }, msg) {
        dispatch('setTemp', msg.v)
    },
    handleHumidity: function({ dispatch }, msg) {
        dispatch('setHumidity', msg.v)
    },
    handleSoil: function({ dispatch }, msg) {
        dispatch('setSoil', msg.v)
    },
}
