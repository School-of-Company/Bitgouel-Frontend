'use client'

import {
  AuthorityContext,
  Bg3,
  ListDocumentIcon,
  MainStyle,
  PrivateRouter,
} from '@bitgouel/common'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

const LectureCompleteList = dynamic(
  () =>
    import(
      '@bitgouel/common/src/components/ListComponents/LectureApply/LectureCompleteList'
    )
)

const LectureCompleteListPage = ({ lectureId }: { lectureId: string }) => {
  const authority = useContext(AuthorityContext)
  const { push } = useRouter()

  return (
    <PrivateRouter isRedirect={authority === 'ROLE_STUDENT'}>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg3}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>강의 이수 명단</MainStyle.PageTitle>
            <MainStyle.ButtonContainer
              onClick={() => push(`/main/lecture/detail/${lectureId}/apply`)}
            >
              <MainStyle.SlideButton>
                <span>신청 명단 조회</span>
              </MainStyle.SlideButton>
              <MainStyle.SlideButton onClick={() => push(`/main/lecture`)}>
                <ListDocumentIcon />
                <span>강의 목록</span>
              </MainStyle.SlideButton>
            </MainStyle.ButtonContainer>
          </MainStyle.BgContainer>
        </MainStyle.SlideBg>
        <MainStyle.MainWrapper>
          <MainStyle.MainContainer>
            <LectureCompleteList lectureId={lectureId} />
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default LectureCompleteListPage
