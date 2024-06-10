import React, { useEffect, useState } from 'react'
import { MainStyle, PostItem, useIntersectionObserver } from '@bitgouel/common'
import { ObserverLine } from '../PostList/style'
import { useGetPostList } from '@bitgouel/api'
import { PostItemTypes } from '@bitgouel/types'

const NoticeList = () => {
  const [noticeSequence, setNoticeSequence] = useState<number | null>(null)
  const { data, refetch } = useGetPostList({
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
        {noticeList.map((notice) => (
          <PostItem key={notice.id} item={notice} />
        ))}
      </MainStyle.MainContainer>
      <ObserverLine ref={scrollTarget} />
    </>
  )
}

export default NoticeList
