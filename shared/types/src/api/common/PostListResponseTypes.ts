import { PostItemProps } from '../../common'

export interface PostItemTypes {
  id: string
  title: string
  modifiedAt: string
}

export interface PostListResponseTypes {
  posts: {
    content: PostItemTypes[]
  }
}
