import axios, { InternalAxiosRequestConfig } from 'axios'
import TokenManager from './TokenManager'

export const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
  },
})

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const tokenManager = new TokenManager()
    const accessTokenIsValid = tokenManager.validateToken(
      tokenManager.accessExpired,
      tokenManager.accessToken
    )
    const refreshTokenIsValid = tokenManager.validateToken(
      tokenManager.refreshExpired,
      tokenManager.refreshToken
    )

    if (
      !accessTokenIsValid &&
      refreshTokenIsValid &&
      !config?.url?.includes('/auth')
    ) {
      await tokenManager.reissueToken()
      tokenManager.initToken()
    } else if (
      !config?.url?.includes('/faq') &&
      !accessTokenIsValid &&
      !refreshTokenIsValid &&
      !config?.url?.includes('/auth')
    ) {
      tokenManager.removeTokens()
      window.location.href = '/'
    }
    config.headers.Authorization = tokenManager.accessToken
      ? `Bearer ${encodeURI(tokenManager.accessToken)}`
      : undefined

    return config
  }
)

instance.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  },
  async (error) => {
    const tokenManager = new TokenManager()
    if (error.response.status === 401) {
      try {
        await tokenManager.reissueToken()
        tokenManager.initToken()
        error.config.headers['Authorization'] = tokenManager.accessToken
          ? `Bearer ${encodeURI(tokenManager.accessToken)}`
          : undefined
        return instance(error.config)
      } catch (err) {
        window.location.replace('/')
      }
    }
    return Promise.reject(error)
  }
)
