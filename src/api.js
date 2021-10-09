import axios from 'axios'

const baseUrl = '/weather'
const openWeatherToken = process.env.VUE_APP_OW_KEY
const paramsWithToken = (params) => ({ params: { ...params, appid: openWeatherToken } })

export default {
  async getWeatherByCity (params) {
    const response = await axios.get(`${baseUrl}`, paramsWithToken(params))
    return response
  },

  async getWeatherByPosition (params) {
    const response = await axios.get(`${baseUrl}`, paramsWithToken(params))
    return response
  }
}
