import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import { DateTime } from 'luxon'
import createPersistedState from 'vuex-persistedstate'

const getCityFromData = (payload) => {
  return {
    name: payload.name,
    country: payload.sys.country,
    weather: payload.weather[0].main,
    temperature: payload.main.temp,
    created_date: DateTime.now().toISO(),
    humidity: `${payload.main.humidity} %`
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    currentPositionWeather: null,
    cities: []
  },

  mutations: {
    setCurrentPositionWeather (state, payload) {
      const city = getCityFromData(payload)
      state.currentPositionWeather = city
    },

    add (state, payload) {
      const city = getCityFromData(payload)

      if (state.cities.some(c => c.name === city.name)) {
        return
      }

      state.cities.push(city)
    },

    update (state, payload) {
      const city = getCityFromData(payload)
      const foundIndex = state.cities.findIndex(c => c.name === city.name)

      Vue.set(state.cities, foundIndex, city)
    },

    remove (state, payload) {
      const foundIndex = state.cities.findIndex(c => c.name === payload)

      Vue.delete(state.cities, foundIndex)
    }
  },

  actions: {
    getWeatherByCity ({ commit }, params) {
      console.log(params)
      api.getWeatherByCity({ q: params.city, units: 'metric' })
        .then(response => commit(params.action, response.data))
        .catch(err => console.log(err))
    },

    getWeatherByPosition ({ commit }, params) {
      api.getWeatherByCity({ lat: params.lat, lon: params.lon })
        .then(response => commit('setCurrentPositionWeather', response.data))
        .catch(err => console.log(err))
    }
  }
})
