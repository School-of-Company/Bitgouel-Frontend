import { InputHTMLAttributes } from 'react'

export interface ValueInputProps extends InputHTMLAttributes<HTMLInputElement> {
  length: number
  onClear: (() => void) | null
  errorText?: string
  isLoading?: boolean
}
