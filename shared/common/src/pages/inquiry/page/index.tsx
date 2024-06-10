'use client'

import {
  Bg5,
  MainStyle,
  MegaPhone,
  Message,
  Plus
} from '@bitgouel/common'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const InquiryContainer = dynamic(() => import('../../../components/InquiryContainer'))

const InquiryPage = ({ isAdmin }: { isAdmin: boolean }) => {
  const { push } = useRouter()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg5}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>문의사항</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push(`/main/post`)}>
              <Message />
              <span>게시글</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton onClick={() => push(`/main/post/notice`)}>
              <MegaPhone />
              <span>공지사항</span>
            </MainStyle.SlideButton>
            {!isAdmin && (
              <MainStyle.SlideButton
                onClick={() => push('/main/post/inquiry/create')}
              >
                <Plus />
                <span>문의사항 추가</span>
              </MainStyle.SlideButton>
            )}
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
           <InquiryContainer isAdmin={isAdmin} />
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default InquiryPage
