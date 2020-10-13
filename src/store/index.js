import Vue from 'vue'
import Vuex from 'vuex'

import * as websocket from '@/store/modules/websocket.js'
import * as env from '@/store/modules/env.js'
import * as quote from '@/store/modules/quote.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        env,
        quote,
        websocket
    }
})
