import { TokensTypes } from '@bitgouel/types'
import axios from 'axios'
import {
  Authority,
  accessExpiredAt,
  accessToken,
  refreshExpiredAt,
  refreshToken,
} from '../'

class TokenManager {
  private _accessToken: string | null = null
  private _refreshToken: string | null = null
  private _accessExpiredAt: string | null = null
  private _refreshExpiredAt: string | null = null

  constructor() {
    this.initToken()
  }

  validateToken(expiredString: string | null, token: string | null): boolean {
    if (!expiredString || !token) return false

    return this.calculateMinutes(expiredString, 1) >= new Date()
  }

  calculateMinutes(currentDate: string, addMinute: number): Date {
    const expiredAt = currentDate ? new Date(currentDate) : new Date()
    expiredAt.setMinutes(expiredAt.getMinutes() - addMinute)

    return expiredAt
  }

  initToken() {
    if (typeof window === 'undefined') return
    this._accessToken = localStorage.getItem(accessToken)
    this._refreshToken = localStorage.getItem(refreshToken)
    this._accessExpiredAt = localStorage.getItem(accessExpiredAt)
    this._refreshExpiredAt = localStorage.getItem(refreshExpiredAt)
  }

  setTokens(tokens: TokensTypes) {
    this._accessToken = tokens.accessToken
    this._refreshToken = tokens.refreshToken
    this._accessExpiredAt = tokens.accessExpiredAt
    this._refreshExpiredAt = tokens.refreshExpiredAt

    localStorage.setItem(accessToken, tokens.accessToken)
    localStorage.setItem(refreshToken, tokens.refreshToken)
    localStorage.setItem(accessExpiredAt, tokens.accessExpiredAt)
    localStorage.setItem(refreshExpiredAt, tokens.refreshExpiredAt)
  }

  removeTokens() {
    if (typeof window === 'undefined') return
    this._accessToken = null
    this._refreshToken = null
    this._accessExpiredAt = null
    this._refreshExpiredAt = null

    localStorage.removeItem(accessToken)
    localStorage.removeItem(refreshToken)
    localStorage.removeItem(accessExpiredAt)
    localStorage.removeItem(refreshExpiredAt)
    localStorage.removeItem(Authority)
  }

  async reissueToken() {
    try {
      const { data } = await axios.patch(
        '/auth',
        {},
        {
          baseURL: '/api',
          withCredentials: true,
          headers: {
            RefreshToken:
              this.refreshToken &&
              `Bearer ${encodeURI(this.refreshToken || '')}`,
          },
        }
      )

      this.setTokens(data)
      window.location.replace(window.location.href)
    } catch (error) {
      this.removeTokens()
      return window.location.replace(`/`)
    }
  }

  get accessToken() {
    return this._accessToken
  }

  get refreshToken() {
    return this._refreshToken
  }

  get accessExpired() {
    return this._accessExpiredAt
  }

  get refreshExpired() {
    return this._refreshExpiredAt
  }
}

export default TokenManager
