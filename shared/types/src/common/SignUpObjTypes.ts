export interface SignUpObjTypes {
  value: string
  placeholder: string
  type: 'text' | 'password' | 'number' | 'email'
  maxLength?: number
  max?: number
}
