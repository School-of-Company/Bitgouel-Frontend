'use client'

import { Filter } from '@bitgouel/common'
import Bg3 from '@bitgouel/common/src/assets/png/mainBg3.png'
import { LectureTypeText, Role } from '@bitgouel/common/src/atoms'
import { LectureItem } from '@bitgouel/common/src/components'
import { LectureTypeModal } from '@bitgouel/common'
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as S from './style'
import { useGetLectureList } from '@bitgouel/api'
import { lectureToEnum } from '@bitgouel/common/src/constants'

const LecturePage = () => {
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useRecoilState<string>(LectureTypeText)
  const role = useRecoilValue(Role)

  const { data } = useGetLectureList({
    page: 0,
    size: 4,
    status: 'APPROVED',
    type: lectureToEnum[lectureTypeText],
  })

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 목록</S.LectureTitle>
          <S.ButtonContainer>
            <S.SelectFilterContainer>
              <S.LectureButton
                onClick={() => setIsLectureType((prev) => !prev)}
              >
                <Filter />
                <span>필터</span>
              </S.LectureButton>
              {isLectureType && (
                <LectureTypeModal
                  location='필터'
                  text={lectureTypeText}
                  setText={setLectureTypeText}
                  setIsLectureType={setIsLectureType}
                />
              )}
            </S.SelectFilterContainer>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ListContainer>
          {data?.data.lectures.content.map((item) => (
            <LectureItem key={item.id} role={role} item={item} />
          ))}
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
        </S.ListContainer>
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
