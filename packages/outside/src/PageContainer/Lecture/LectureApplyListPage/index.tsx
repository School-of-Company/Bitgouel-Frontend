'use client'

import { Bg3, handleSelect } from '@bitgouel/common'
import * as S from './style'
import React, { ChangeEvent, useState } from 'react'
import { ApplyItem } from '@/components'

const obj = {
  id: '1234',
  cohort: 6,
  name: '파티피플공명',
  school: '광주소프트웨어마이스터고등학교',
  grade: 3,
  classNum: 4,
  clubName: '나의 미래는 내가 주인공이다!',
  phoneNumber: '010-2786-7726',
  email: 'bitgouel@gmail.com',
}

const LectureApplyListPage = () => {
  const [applyIds, setApplyIds] = useState<string[]>([])
  const handleSelectUsers = (checked: boolean, userId: string) =>
    handleSelect({ checked, id: userId, setIds: setApplyIds })
  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 신청 명단</S.LectureTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ListContainer>
          <S.ApplyInfoContainer>
            <span>인적사항</span>
            <span>이수</span>
          </S.ApplyInfoContainer>
          <ApplyItem
            item={obj}
            ids={applyIds}
            handleSelectUsers={handleSelectUsers}
          />
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
