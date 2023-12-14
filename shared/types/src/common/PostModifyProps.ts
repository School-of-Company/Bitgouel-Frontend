import { PostDetailResponseTypes } from "../api"

export interface PostModifyProps {
  modifyData: PostDetailResponseTypes | undefined
  postId: string
}
