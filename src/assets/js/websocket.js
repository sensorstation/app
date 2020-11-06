import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import store from '@/store'

import {
    SOCKET_ONOPEN,
    SOCKET_ONCLOSE,
    SOCKET_ONERROR,
    SOCKET_ONMESSAGE,
    SOCKET_RECONNECT,
    SOCKET_RECONNECT_ERROR,
    SOCKET_DISCONNECT,
} from '@/store/mutation-types'

const mutations = {
    SOCKET_ONOPEN,
    SOCKET_ONCLOSE,
    SOCKET_ONERROR,
    SOCKET_ONMESSAGE,
    SOCKET_RECONNECT,
    SOCKET_RECONNECT_ERROR,
    SOCKET_DISCONNECT,
}

Vue.use(VueNativeSock, 'ws://10.24.4.4:8011/ws', {
    store: store,
    mutations: mutations,
    format: 'json',
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
})
