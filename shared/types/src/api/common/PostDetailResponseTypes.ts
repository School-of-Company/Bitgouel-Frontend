import { PostPayloadTypes } from './PostPayloadTypes'

export interface PostDetailResponseTypes extends PostPayloadTypes {
  writer: string
  modifiedAt: string
}
