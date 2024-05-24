export interface PostItemTypes {
  id: string
  title: string
  postSequence: number
  modifiedAt: string
}

export interface PostListResponseTypes {
  posts: PostItemTypes[]
}
