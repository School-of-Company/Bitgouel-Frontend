'use client'

import {
  AuthorityContext,
  Bg3,
  MainStyle,
  PrivateRouter,
} from '@bitgouel/common'
import dynamic from 'next/dynamic'
import { useContext } from 'react'

const LectureCompleteList = dynamic(
  () =>
    import(
      '@bitgouel/common/src/components/ListComponents/LectureApply/LectureCompleteList'
    )
)

const LectureCompleteListPage = ({ lectureId }: { lectureId: string }) => {
  const authority = useContext(AuthorityContext)

  return (
    <PrivateRouter isRedirect={authority === 'ROLE_STUDENT'}>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg3}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>강의 이수 명단</MainStyle.PageTitle>
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
