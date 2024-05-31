import { PostWritePage } from '@bitgouel/common'

const PostModify = ({ params }: { params: { postId: string } }) => {
  return <PostWritePage postId={params.postId} />
}

export default PostModify
