'use client'

import { useGetPostList } from '@bitgouel/api'
import {
  Bg1,
  MainStyle,
  Message,
  Plus,
  PostItem,
  Question,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const NoticePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [noticeSequence, setNoticeSequence] = useState<number | null>(null)
  const { data } = useGetPostList({
    type: 'NOTICE',
    postSequence: noticeSequence,
    size: 10,
  })
  const { push } = useRouter()

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
              <MainStyle.SlideButton onClick={() => push('/main/post/notice/create')}>
                <Plus />
                <span>공지 추가</span>
              </MainStyle.SlideButton>
            )}
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          {data?.posts.map((notice) => (
            <PostItem key={notice.id} item={notice} />
          ))}
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default NoticePage
