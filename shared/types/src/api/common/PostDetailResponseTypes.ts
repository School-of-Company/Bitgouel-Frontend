import { PostCreatePayloadTypes } from './PostCreatePayloadTypes'

export interface PostDetailResponseTypes extends PostCreatePayloadTypes {
  writer: string
  modifiedAt: string
}
