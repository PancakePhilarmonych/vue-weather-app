import axios from 'axios'

const init = () => {
  axios.defaults.responseType = 'json'

  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
  axios.defaults.headers['x-rapidapi-key'] = process.env.VUE_APP_OW_TOKEN
  axios.defaults.headers['x-rapidapi-host'] = process.env.VUE_APP_OW_HOST
}

export default init
