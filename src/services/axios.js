import axios from 'axios'

const init = () => {
  axios.defaults.responseType = 'json'
  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
}

export default init
