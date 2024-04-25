import { SignUpCommonPayloadTypes } from './SignUpCommonPayloadTypes'

export interface GovernmentPayloadTypes extends SignUpCommonPayloadTypes {
  governmentName: string
  position: string
  sectors: string
}
