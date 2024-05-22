import { PageTypes } from './PageTypes'

export interface PostItemTypes {
  id: string
  title: string
  modifiedAt: string
}

export interface PostListResponseTypes {
  posts: {
    content: PostItemTypes[]
  } & PageTypes
}
