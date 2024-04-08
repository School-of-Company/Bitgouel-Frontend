'use client'

import { useGetLectureList } from '@bitgouel/api'
import {
  Bg3,
  Filter,
  FilterComponent,
  LectureItem,
  LectureFilterType,
  Plus,
} from '@bitgouel/common'
import { LectureTypeEnum, LectureTypesFilterListTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

const LecturePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [lectureTypes, setLectureTypes] = useState<
    LectureTypesFilterListTypes[]
  >([
    { text: '전체', item: 'all', checked: true },
    {
      text: '상호학점인정교육과정',
      item: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
      checked: false,
    },
    {
      text: '대학탐방프로그램',
      item: 'UNIVERSITY_EXPLORATION_PROGRAM',
      checked: false,
    },
  ])
  const [lectureType, setLectureType] = useRecoilState<LectureTypeEnum | ''>(
    LectureFilterType
  )
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const { push } = useRouter()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLectureTypes((prev) =>
      prev.map((type) =>
        type.item === e.target.id
          ? { ...type, checked: true }
          : { ...type, checked: false }
      )
    )

    if (e.target.checked && e.target.id === 'all') setLectureType('')
    else if (e.target.checked) setLectureType(e.target.id as LectureTypeEnum)
  }

  const { data, refetch } = useGetLectureList({
    page: 0,
    size: 10,
    type: lectureType || 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  })

  useEffect(() => {
    refetch()
  }, [lectureType])

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 목록</S.LectureTitle>
          <S.ButtonContainer>
            {isAdmin && (
              <S.LectureButton onClick={() => push('/main/lecture/create')}>
                <Plus />
                <span>강의 개설하기</span>
              </S.LectureButton>
            )}
            <S.SelectFilterContainer>
              <S.LectureButton
                onClick={() => setIsLectureType((prev) => !prev)}
              >
                <Filter />
                <span>필터</span>
              </S.LectureButton>
              {isLectureType && (
                <FilterComponent
                  title='강의 유형'
                  filterList={lectureTypes}
                  onChange={onChange}
                />
              )}
            </S.SelectFilterContainer>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ListContainer>
          {data?.data.lectures.content.map((item) => (
            <LectureItem key={item.id} item={item} />
          ))}
        </S.ListContainer>
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
