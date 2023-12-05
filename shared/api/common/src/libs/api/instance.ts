import axios, { InternalAxiosRequestConfig, AxiosError } from 'axios'
import { usePatchReissue } from '../../hooks'
import TokenManager from './TokenManager'

export const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
})

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const tokenManager = new TokenManager()
    if (
      !tokenManager.validateToken(
        tokenManager.accessExpired,
        tokenManager.accessToken
      ) &&
      tokenManager.validateToken(
        tokenManager.refreshExpired,
        tokenManager.refreshToken
      )
    ) {
      // await useReissue()
      tokenManager.initToken()
    } else if (
      !tokenManager.validateToken(
        tokenManager.accessExpired,
        tokenManager.accessToken
      ) &&
      !tokenManager.validateToken(
        tokenManager.refreshExpired,
        tokenManager.refreshToken
      )
      // !tokenManager.skipUrl()
    )
      tokenManager.removeTokens()

    config.headers.Authorization = tokenManager.accessToken
      ? `Bearer ${tokenManager.accessToken}`
      : undefined

    return config
  },

  async (error: AxiosError) => {
    const tokenManager = new TokenManager()

    if (
      error.response &&
      error.response.status === 401
      // !tokenManager.skipUrl()
    ) {
      // return usePatchAccessToken()
    }
    return Promise.reject(error)
  }
)
