import axios from 'axios'

import envObj from '../env'


const _axios = axios.create()

_axios.interceptors.request.use(async (config) => {
  config.headers['Content-Type'] =
    config.headers['Content-Type'] ?? 'application/json'
  config.headers.Accept = config.headers.Accept ?? 'application/json'

  config.headers.Authorization = config.headers.Authorization ?? envObj.API_KEY

  return config
})

_axios.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error),
)

export function fetchAPI({
  url = envObj.API_URL,
  prefix = '',
  path,
  ...options
}) {
  return _axios.request({
    baseURL: url + prefix + path,
    ...options,
  })
}
