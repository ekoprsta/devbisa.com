/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectsActive: [],
    projectComplete: [],
    baseUrl: 'http://localhost:3000',
    login: false,
    projectUser: []
  },
  getters: {
  },
  mutations: {
    SET_PROJECTS_Active (state, payload) {
      state.projectsActive = payload
    },
    SET_PROJECTS_Complete (state, payload) {
      state.projectComplete = payload
    },
    SET_LOGIN_VALUE (state, payload) {
      state.login = payload
    },
    SET_PROJECT_USER (state, payload) {
      state.projectUser = payload
    }
  },
  actions: {
    getAllProjects (context) {
      let activePro = []
      let donePro = []
      axios({
        url: `${this.state.baseUrl}/project`,
        method: 'GET'
      })
        .then(({ data }) => {
          console.log(data)
          for (let i = 0; i < data.length; i++) {
            if (data[i].status === 'Complete') {
              donePro.push(data[i])
            } else {
              activePro.push(data[i])
            }
          }
          context.commit('SET_PROJECTS_Active', activePro)
          console.log(activePro, 'ini active');
          context.commit('SET_PROJECTS_Complete', donePro)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getLoginValue (context) {
      if (localStorage.getItem('accesstoken')) {
        context.commit('SET_LOGIN_VALUE', true)
      } else {
        context.commit('SET_LOGIN_VALUE', false)
      }
    },
    getProjectUser (context) {
      axios({
        url: `${this.state.baseUrl}/projectUser`,
        method: 'GET',
        headers: { accesstoken: localStorage.getItem('accesstoken') }
      })
        .then(({data}) => {
          context.commit('SET_PROJECT_USER', data)
          console.log(data, 'ini data');
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
  modules: {
  }
})
