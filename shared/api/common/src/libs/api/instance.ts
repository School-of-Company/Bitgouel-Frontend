import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import TokenManager from './TokenManager'

export const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS,PATCH',
    'Access-Control-Allow-Credentials': true,
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
    }

    if (config.url && config.url.includes('login')) return config
    config.headers.Authorization = tokenManager.accessToken
      ? `Bearer ${encodeURI(tokenManager.accessToken)}`
      : undefined

    return config
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  },
  async (error: AxiosError) => {
    const tokenManager = new TokenManager()
    if (
      !window.location.href.includes('auth') &&
      error.response &&
      error.config &&
      error.response.status === 401
    ) {
      try {
        await tokenManager.reissueToken()
        tokenManager.initToken()
        error.config.headers['Authorization'] = tokenManager.accessToken
          ? `Bearer ${encodeURI(tokenManager.accessToken)}`
          : undefined
        return instance(error.config)
      } catch (err) {
        window.location.replace(`/`)
      }
    }
    return Promise.reject(error)
  }
)
