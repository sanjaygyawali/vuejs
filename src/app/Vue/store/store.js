import Vue from 'vue'
import Vuex from 'vuex'
// import httpService from '../../http/httpService'
import sidebar from './modules/StoreTemplate.js'
import auth from './modules/Authentication.js'
import actions from './modules/Action.js'

Vue.use(Vuex)

const state = {}

const store = new Vuex.Store({
  modules: {
    sidebar,
    auth,
    actions
  },
  state,
  getters: {},
  actions: {
    nextRoute () {}
  },
  mutations: {}
})
export default store
