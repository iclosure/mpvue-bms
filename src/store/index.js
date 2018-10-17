import Vue from 'vue'
import Vuex from 'vuex'
import realtime from './modules/realtime'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    realtime
  },
  strict: debug,
  plugins: debug ? [] : []
})
