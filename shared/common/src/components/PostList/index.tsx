import { useGetPostList } from '@bitgouel/api'
import { MainStyle } from '@bitgouel/common'
import { PostItemTypes } from '@bitgouel/types'
import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../../hooks'
import PostItem from '../PostItem'
import * as S from './style'

const PostList = () => {
  const [postSequence, setPostSequence] = useState<number | null>(null)
  const { data, refetch } = useGetPostList({
    type: 'EMPLOYMENT',
    postSequence,
    size: 10,
  })
  const [postList, setPostList] = useState<PostItemTypes[]>([])
  const [scrollTarget] = useIntersectionObserver({
    listData: data?.posts || [],
    setSequence: setPostSequence,
    setList: setPostList,
  })

  useEffect(() => {
    refetch()
  }, [postSequence])

  return (
    <>
      <MainStyle.MainContainer>
        {postList.map((post) => (
          <PostItem key={post.id} item={post} />
        ))}
      </MainStyle.MainContainer>
      <S.ObserverLine ref={scrollTarget} />
    </>
  )
}

export default PostList
