'use client'

import { useGetLectureApplyList } from '@bitgouel/api'
import { Bg3, LectureApplyItem, PrivateRouter } from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import * as S from './style'
import { MainStyle } from '@bitgouel/common'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_TEACHER',
  'ROLE_PROFESSOR',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_GOVERNMENT',
  'ROLE_BBOZZAK',
]

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
          {/* {content?.length && !isLoading && (
          <PaginationPages
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )} */}
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    </PrivateRouter>
  )
}

export default LectureApplyListPage
