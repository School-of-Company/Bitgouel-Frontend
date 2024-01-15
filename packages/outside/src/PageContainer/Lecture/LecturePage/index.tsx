'use client'

import { Filter, Plus } from '@bitgouel/common'
import { Bg3 } from '@bitgouel/common'
import { LectureTypeText, Role } from '@bitgouel/common/src/atoms'
import { LectureItem } from '@bitgouel/common/src/components'
import { LectureTypeModal } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as S from './style'
import { lectureToEnum } from '@bitgouel/common/src/constants'
import { useGetLectureList } from '@bitgouel/api'

const LecturePage = () => {
  const { push } = useRouter()
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useRecoilState<string>(LectureTypeText)
  const role = useRecoilValue(Role)

  const { data, refetch } = useGetLectureList({
    page: 0,
    size: 10,
    status: 'PENDING',
    type: lectureToEnum[lectureTypeText],
  })

  useEffect(() => {
    refetch()
  }, [lectureTypeText])

  return (
    <div>
      <S.SlideBg url={ Bg3 }>
        <S.BgContainer>
          <S.LectureTitle>강의 목록</S.LectureTitle>
          <S.ButtonContainer>
            <S.LectureButton onClick={() => push('/main/lecture/create')}>
              <Plus />
              <span>개설 신청하기</span>
            </S.LectureButton>
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
            <LectureItem role={role} item={item} key={item.id} />
          ))}
        </S.ListContainer>
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
