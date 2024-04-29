import { SignUpCommonPayloadTypes } from './SignUpCommonPayloadTypes'

export interface StudentPayloadTypes extends SignUpCommonPayloadTypes {
  grade: number
  classRoom: number
  number: number
  admissionNumber: number
}
