export interface LoginErrorTypes {
  fieldError: {
    email?: string
    password?: string
  }
  status: number
}
