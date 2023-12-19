import { PostModifyPage } from '@bitgouel/common/src/pages'
import { useGetPostDetail } from '@bitgouel/api'
import React from 'react'

const PostModify = ({ params }: { params: { postId: string } }) => {
  return <PostModifyPage postId={params.postId} />
}

export default PostModify
