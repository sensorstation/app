import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

const server = 'localhost:8011'
const wstr = 'ws://' + server + '/ws';

//Vue.use(VueNativeSock, 'ws://
Vue.use(VueNativeSock, wstr, {
    store: store,
    format: 'json',

    theme: {
        dark: true,
    },

    reconnection: true, // (Boolean) whether to reconnect automatically (false)
    reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)    
})


