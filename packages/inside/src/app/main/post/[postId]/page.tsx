import React from 'react'
import { PostDetailPage } from '@bitgouel/common/src/pages'

const PostDetail = ({ params }: { params: { postId: string } }) => {
  return <PostDetailPage postId={params.postId} />
}

export default PostDetail
