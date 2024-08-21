'use client'

import {
  AuthorityContext,
  Bg3,
  MainStyle,
  PeopleCircle,
  PrivateRouter,
  ReadingGlassesIcon,
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
                <PeopleCircle />
                <span>신청 명단 조회</span>
              </MainStyle.SlideButton>
              <MainStyle.SlideButton
                onClick={() => push(`/main/lecture/detail/${lectureId}`)}
              >
                <ReadingGlassesIcon />
                <span>강의 상세 보기</span>
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
