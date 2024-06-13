import { useGetPostList } from '@bitgouel/api'
import { MainStyle, NoneResult, WaitingAnimation } from '@bitgouel/common'
import { PostItemTypes } from '@bitgouel/types'
import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../../../hooks'
import PostItem from '../../PostItem'
import * as S from './style'

const PostList = () => {
  const [postSequence, setPostSequence] = useState<number | null>(null)
  const { data, refetch, isLoading } = useGetPostList({
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
        {isLoading && <WaitingAnimation isLoadingTitle={'게시글 목록을'} />}
        {!isLoading && postList.length <= 0 ? (
          <NoneResult notDataTitle={'게시글 목록이'} />
        ) : (
          postList.map((post) => <PostItem key={post.id} item={post} />)
        )}
      </MainStyle.MainContainer>
      <S.ObserverLine ref={scrollTarget} />
    </>
  )
}

export default PostList
