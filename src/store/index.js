import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import { DateTime } from 'luxon'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    currentCity: {},
    cities: []
  },

  getters: {
    cities (state) {
      return state.cities
    }
  },

  mutations: {
    add (state, payload) {
      const city = {
        name: payload.name,
        country: payload.sys.country,
        weather: payload.weather[0].main,
        temperature: payload.main.temp,
        created_date: DateTime.now().toISO(),
        humidity: `${payload.main.humidity}%`,
        id: `${payload.name}/#${DateTime.now().toISO()}`
      }

      if (state.cities.some(c => c.name === city.name)) {
        return
      }

      state.cities.push(city)
    },

    update (state, payload) {
      const city = {
        name: payload.name,
        country: payload.sys.country,
        weather: payload.weather[0].main,
        temperature: payload.main.temp,
        created_date: DateTime.now().toISO(),
        humidity: `${payload.main.humidity}%`,
        id: `${payload.name}/#${DateTime.now().toISO()}`
      }

      const foundIndex = state.cities.findIndex(c => c.name === city.name)

      Vue.set(state.cities, foundIndex, city)
    }
  },

  actions: {
    getWeatherInfo ({ commit }, params) {
      api.getWeatherByCity({ q: params.city, units: 'metric' })
        .then(response => commit(params.action, response.data))
        .catch(err => console.log(err))
    }
  },

  modules: {
  }
})
