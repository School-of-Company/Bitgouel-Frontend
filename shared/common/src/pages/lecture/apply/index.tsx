'use client'

import {
  AuthorityContext,
  Bg3,
  ListDocumentIcon,
  MainStyle,
  PeopleCircle,
  PrivateRouter
} from '@bitgouel/common'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

const LectureApplyList = dynamic(
  () =>
    import(
      '@bitgouel/common/src/components/ListComponents/LectureApply/LectureApplyList'
    )
)

const LectureApplyListPage = ({ lectureId }: { lectureId: string }) => {
  const authority = useContext(AuthorityContext)
  const { push } = useRouter()

  return (
    <PrivateRouter isRedirect={authority === 'ROLE_STUDENT'}>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg3}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>강의 신청 명단</MainStyle.PageTitle>
            <MainStyle.ButtonContainer>
              <MainStyle.SlideButton
                onClick={() =>
                  push(`/main/lecture/detail/${lectureId}/complete`)
                }
              >
                <PeopleCircle />
                <span>이수 명단 조회</span>
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
            <LectureApplyList lectureId={lectureId} />
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default LectureApplyListPage
