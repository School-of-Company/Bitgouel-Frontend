'use client'

import { useGetLectureApplyList } from '@bitgouel/api'
import {
  Bg3,
  LectureApplyItem,
  MainStyle,
  PrivateRouter,
} from '@bitgouel/common'
import * as S from './style'

const LectureApplyListPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetLectureApplyList(lectureId)

  return (
    <PrivateRouter>
      <MainStyle.PageWrapper>
        <MainStyle.SlideBg url={Bg3}>
          <MainStyle.BgContainer>
            <MainStyle.PageTitle>강의 신청 명단</MainStyle.PageTitle>
          </MainStyle.BgContainer>
        </MainStyle.SlideBg>
        <MainStyle.MainWrapper>
          <MainStyle.MainContainer>
            <S.ApplyInfoContainer>
              <span>인적사항</span>
              <span>이수</span>
            </S.ApplyInfoContainer>
            <S.ListContainer>
              {data?.students.map((student) => (
                <LectureApplyItem
                  key={student.id}
                  item={student}
                  lectureId={lectureId}
                />
              ))}
            </S.ListContainer>
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default LectureApplyListPage
