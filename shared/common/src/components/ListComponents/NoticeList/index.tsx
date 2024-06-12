import React, { useEffect, useState } from 'react'
import {
  MainStyle,
  NoneResult,
  PostItem,
  useIntersectionObserver,
} from '@bitgouel/common'
import { ObserverLine } from '../PostList/style'
import { useGetPostList } from '@bitgouel/api'
import { PostItemTypes } from '@bitgouel/types'

const NoticeList = () => {
  const [noticeSequence, setNoticeSequence] = useState<number | null>(null)
  const { data, refetch, isLoading } = useGetPostList({
    type: 'NOTICE',
    postSequence: noticeSequence,
    size: 10,
  })
  const [noticeList, setNoticeList] = useState<PostItemTypes[]>([])
  const [scrollTarget] = useIntersectionObserver({
    listData: data?.posts || [],
    setSequence: setNoticeSequence,
    setList: setNoticeList,
  })

  useEffect(() => {
    refetch()
  }, [noticeSequence])

  return (
    <>
      <MainStyle.MainContainer>
        {isLoading && <div>공지사항을 불러오는 중...</div>}
        {!isLoading && noticeList.length <= 0 ? (
          <NoneResult notDataTitle={'공지사항이'} />
        ) : (
          noticeList.map((notice) => <PostItem key={notice.id} item={notice} />)
        )}
      </MainStyle.MainContainer>
      <ObserverLine ref={scrollTarget} />
    </>
  )
}

export default NoticeList
