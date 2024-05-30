'use client'

import { useGetPostList } from '@bitgouel/api'
import {
  Bg1,
  MainStyle,
  Message,
  Plus,
  PostItem,
  Question,
  useIntersectionObserver,
} from '@bitgouel/common'
import { PostItemTypes } from '@bitgouel/types' 
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ObserverLine } from '../../page/style'


const NoticePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [noticeSequence, setNoticeSequence] = useState<number | null>(null)
  const { data, refetch } = useGetPostList({
    type: 'NOTICE',
    postSequence: noticeSequence,
    size: 10,
  })
  const [noticeList, setNoticeList] = useState<PostItemTypes[]>([])
  const [ scrollTarget ] = useIntersectionObserver({
    listData: data?.posts || [],
    setSequence: setNoticeSequence,
    setList: setNoticeList,
  })
  const { push } = useRouter()
  
  useEffect(() => {
    refetch()
  }, [noticeSequence])

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg1}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>공지사항</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push(`/main/post`)}>
              <Message />
              <span>게시글</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton onClick={() => push(`/main/post/inquiry`)}>
              <Question />
              <span>문의사항</span>
            </MainStyle.SlideButton>
            {isAdmin && (
              <MainStyle.SlideButton
                onClick={() => push('/main/post/notice/create')}
              >
                <Plus />
                <span>공지 추가</span>
              </MainStyle.SlideButton>
            )}
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          {noticeList.map((notice) => (
            <PostItem key={notice.id} item={notice} />
          ))}
        </MainStyle.MainContainer>
        <ObserverLine ref={scrollTarget} />
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default NoticePage
