import axios from 'axios'
const baseUrl = '/weather'

export default {
  async getWeatherByCity (params) {
    const response = await axios.get(`${baseUrl}`, { params: { ...params } })

    return response
  }
}
