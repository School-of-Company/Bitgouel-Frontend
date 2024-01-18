'use client'

import { useGetLectureList } from '@bitgouel/api'
import { Bg3, Filter, LectureTypeModal } from '@bitgouel/common'
import { LectureTypeText } from '@bitgouel/common/src/atoms'
import { LectureItem } from '@bitgouel/common/src/components'
import { lectureToEnum } from '@bitgouel/common/src/constants'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'
import { RoleEnumTypes } from '@bitgouel/types'

const LecturePage = () => {
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useRecoilState<string>(LectureTypeText)
  const role =
    typeof window !== 'undefined'
      ? (localStorage.getItem('Authority') as RoleEnumTypes)
      : null

  const { data, refetch } = useGetLectureList({
    page: 0,
    size: 10,
    status: 'APPROVED',
    type: lectureToEnum[lectureTypeText],
  })

  useEffect(() => {
    refetch()
  }, [lectureTypeText])

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
        </S.ListContainer>
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
