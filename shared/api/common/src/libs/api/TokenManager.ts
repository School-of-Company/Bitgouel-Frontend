import {
  accessToken,
  refreshToken,
  accessExpiredAt,
  refreshExpiredAt,
} from '../'
import Router from 'next/router'

interface TokensType {
  accessToken: string
  refreshToken: string
  accessExpiredAt: string
  refreshExpiredAt: string
}

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

  skipUrl() {
    const skipUrlArr = ['/login', '/signUp']

    return skipUrlArr.includes(Router.route)
  }

  initToken() {
    if (typeof window === 'undefined') return
    this._accessToken = localStorage.getItem(accessToken)
    this._refreshToken = localStorage.getItem(refreshToken)
    this._accessExpiredAt = localStorage.getItem(accessExpiredAt)
    this._refreshExpiredAt = localStorage.getItem(refreshExpiredAt)
  }

  setTokens(tokens: TokensType) {
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
