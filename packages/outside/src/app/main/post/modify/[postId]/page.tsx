import { PostModifyPage } from '@bitgouel/common'
const PostModify = ({ params }: { params: { postId: string } }) => {
  return <PostModifyPage postId={params.postId} />
}

export default PostModify
