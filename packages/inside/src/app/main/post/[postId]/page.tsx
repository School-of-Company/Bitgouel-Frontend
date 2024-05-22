import { PostDetailPage } from '@bitgouel/common'

const PostDetail = ({ params }: { params: { postId: string } }) => {
  return <PostDetailPage postId={params.postId} />
}

export default PostDetail
