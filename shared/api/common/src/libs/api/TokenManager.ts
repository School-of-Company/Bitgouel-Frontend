import {
  accessToken,
  refreshToken,
  accessExpired,
  refreshExpired,
} from '@/common/src/libs/token'
import Router from 'next/router'
import { patch } from './method'

interface TokensType {
  accessToken: string
  refreshToken: string
  accessExpired: string
  refreshExpired: string
}

class TokenManager {
  private _accessToken: string | null = null
  private _refreshToken: string | null = null
  private _accessExpired: string | null = null
  private _refreshExpired: string | null = null

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
    this._accessExpired = localStorage.getItem(accessExpired)
    this._refreshExpired = localStorage.getItem(refreshExpired)
  }

  setTokens(tokens: TokensType) {
    this._accessToken = tokens.accessToken
    this._refreshToken = tokens.refreshToken
    this._accessExpired = tokens.accessExpired
    this._refreshExpired = tokens.refreshExpired

    localStorage.setItem(accessToken, tokens.accessToken)
    localStorage.setItem(refreshToken, tokens.refreshToken)
    localStorage.setItem(accessExpired, tokens.accessExpired)
    localStorage.setItem(refreshExpired, tokens.refreshExpired)
  }

  removeTokens() {
    if (typeof window === 'undefined') return
    this._accessToken = null
    this._refreshToken = null
    this._accessExpired = null
    this._refreshExpired = null

    localStorage.removeItem(accessToken)
    localStorage.removeItem(refreshToken)
    localStorage.removeItem(accessExpired)
    localStorage.removeItem(refreshExpired)
  }

  get accessToken() {
    return this._accessToken
  }

  get refreshToken() {
    return this._refreshToken
  }

  get accessExpired() {
    return this._accessExpired
  }

  get refreshExpired() {
    return this._refreshExpired
  }
}

export default TokenManager
