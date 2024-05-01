'use client'

import { LectureApplyItem, Bg3, handleSelect } from '@bitgouel/common'
import { useEffect, useState } from 'react'
import * as S from './style'
import { TokenManager, useGetLectureApplyList } from '@bitgouel/api'
import { RoleEnumTypes } from '@bitgouel/types'
import { redirect } from 'next/navigation'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_TEACHER',
  'ROLE_PROFESSOR',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_GOVERNMENT',
  'ROLE_BBOZZAK',
]

const LectureApplyListPage = ({ lectureId }: { lectureId: string }) => {
  const tokenManager = new TokenManager()
  const { data } = useGetLectureApplyList(lectureId)

  useEffect(() => {
    if (tokenManager.authority) {
      if (tokenManager && roleArray.includes(tokenManager.authority)) return
      else return redirect('/')
    }
  }, [])

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 신청 명단</S.LectureTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ApplyInfoContainer>
          <span>인적사항</span>
          <span>이수</span>
        </S.ApplyInfoContainer>
        <S.ListContainer>
          {data?.students.map((student) => (
            <LectureApplyItem key={student.id} item={student} lectureId={lectureId} />
          ))}
        </S.ListContainer>
        {/* {content?.length && !isLoading && (
          <PaginationPages
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )} */}
      </S.ListWrapper>
    </div>
  )
}

export default LectureApplyListPage
