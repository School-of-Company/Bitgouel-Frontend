// import { TokenResponseType } from 'types';
// import { patch } from './method'
// import { authUrl } from '../urlController'

import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
})

apiInstance.interceptors.request.use(
  (request) => {
    if (request.url !== '/auth')
      request.headers['Authorization'] = `Bearer ${window.localStorage.getItem(
        'access_token'
      )}`
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)
