import axios from 'axios'

const axiosNewsApiClient = axios.create({
  baseURL: 'http://localhost:4000'
})

export default axiosNewsApiClient