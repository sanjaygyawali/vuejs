/* eslint-disable */

import appService from '@/services/http/http.service.js'
import Vue from 'vue';
const types = {
  IS_AUTHENTICATED: 'IS_AUTHETICATED',
  LOGOUT: 'LOGOUT',
  SAVE_TOKEN: 'SAVE_TOKEN',
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
  UPDATE_USER: 'UPDATE_USER'
}
const state = {
  user: null,
  token: '',
  isAuthenticated: false,
}

// get the state form here
const getters = {
  isAuthenticated: state => {
    return state.isAuthenticated
  },
  user: state => {
    return state.user
  },
  token: state => {
    return state.token
  }
}

// any action performed are captured and the commit will mutate the action
const actions = {
  logout({ commit }) {
    commit(types.LOGOUT)
  },
  login(context, credentials) {
    return new Promise(resolve =>
      appService.login(credentials)
        .then(data => {
          window.console.log(data.success)
          if(data.code === 200){
            window.console.log("Befor Commit")
            context.commit('login', data)
            window.console.log("After Commit")

          } else {
            window.alert("show the error message")
          }
          resolve()
        })
        .catch(() => window.alert('Could Not Login'))
    )
  },
  checkUserToken ({ commit }) {
    window.console.log("This is user token", state.token)
    //check if token is available in own state
        //return and resolve
    if (state.token  !== '' && state.isAuthenticated) {
      window.console.log("Token and auth already set", state.token)
      return Promise.resolve(state.isAuthenticated)
    }
    let temptoken = localStorage.getItem('token')
    if (localStorage.getItem('token') !== null && localStorage.getItem('token') !== '') {
      window.console.log("token is snot set already but Token set in local storage", state.token)
      //mutate to change the state of the token and authentcation
      let token = window.localStorage.getItem('token')
      commit(types.SAVE_TOKEN, token)
      return Promise.resolve(state.isAuthenticated)
    } else {
      window.console.log("No token Found", state.token)
      return Promise.resolve(false)
    }

    

    // if token is available in localstorage
      //set token from local storaage

    // if not available checkin local storage 
      //reject and return false
  }
}

// Changes to state are always made by mutators
const mutations = {
  [types.SAVE_TOKEN] (state, token) {
    state.token = token
    state.isAuthenticated = true
  },
  SAVE_TOKEN (state, token) {
    state.token = token
    state.isAuthenticated = true
  },
  [types.FETCH_USER_SUCCESS] (state, { user }) {
    state.user = user
  },

  [types.FETCH_USER_FAILURE] (state) {
    state.user = null
  },
  [types.LOGOUT] (state) {
    state.isAuthenticated = false
    state.token = ''
    state.user = null
    window.localStorage.setItem('token', '')
  },
  logout(state) {
    state.isAuthenticated = false
    window.localStorage.setItem('token', '')
  },
  login(state, data) {
    window.localStorage.setItem('token', data.data.token)
    state.token = data.data.token
    state.isAuthenticated = true
  },
}

if (typeof window !== 'undefined') {
  // document.addEventListener('DOMContentLoaded', function(event) {
  //   let expiration = window.localStorage.getItem('tokenExpiration')
  //   var unixTimestamp = new Date().getTime() / 1000
  //   if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
  //     store.state.isAuthenticated = true
  //   }
  // })
}

export default {
  state,
  getters,
  actions,
  mutations,
}
