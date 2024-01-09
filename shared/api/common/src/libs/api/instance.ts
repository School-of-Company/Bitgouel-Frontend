import axios, { InternalAxiosRequestConfig } from 'axios'
import TokenManager from './TokenManager'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
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
      !accessTokenIsValid &&
      !refreshTokenIsValid &&
      !config?.url?.includes('/auth')
    ) {
      tokenManager.removeTokens()
      toast.error('다시 로그인해주세요')
    }
    config.headers.Authorization = tokenManager.accessToken
      ? `Bearer ${tokenManager.accessToken}`
      : undefined

    return config
  }
)
