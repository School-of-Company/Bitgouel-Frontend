'use client'

import { useGetLectureList } from '@bitgouel/api'
import {
  Bg3,
  Filter,
  LectureItem,
  LectureTypeModal,
  LectureTypeText,
  Plus,
  lectureTypeToEnum,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

const LecturePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useRecoilState<string>(LectureTypeText)
  const { push } = useRouter()
  const { data, refetch } = useGetLectureList({
    page: 0,
    size: 10,
    status: 'PENDING',
    type: lectureTypeToEnum[lectureTypeText],
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
            {isAdmin && (
              <S.LectureButton onClick={() => push('/main/lecture/create')}>
                <Plus />
                <span>개설 신청하기</span>
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
            <LectureItem key={item.id} item={item} />
          ))}
        </S.ListContainer>
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
