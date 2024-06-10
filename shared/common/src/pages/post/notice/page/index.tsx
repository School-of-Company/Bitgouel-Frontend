'use client'

import {
  Bg1,
  MainStyle,
  Message,
  Plus,
  Question
} from '@bitgouel/common'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const NoticeList = dynamic(() => import('../../../../components/NoticeList'))

const NoticePage = ({ isAdmin }: { isAdmin: boolean }) => {
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
        <NoticeList />
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default NoticePage
