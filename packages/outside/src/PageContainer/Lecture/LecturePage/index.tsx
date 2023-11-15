'use client'

import { Filter, Plus } from '@common/assets'
import Bg3 from '@common/assets/png/mainBg3.png'
import { LectureTypeText } from '@common/atoms'
import { LectureItem } from '@common/components'
import { LectureTypeModal } from '@common/modals'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'
import { LectureItemType, useGetLectureList } from '@api/common'
import { lectureToEnum } from '@common/constants'

const LecturePage = () => {
  const router = useRouter()
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useRecoilState<string>(LectureTypeText)

  const { data } = useGetLectureList({
    page: 0,
    size: 4,
    status: 'PENDING',
    type: lectureToEnum[lectureTypeText],
  })

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 목록</S.LectureTitle>
          <S.ButtonContainer>
            <S.LectureButton
              onClick={() => router.push('/main/lecture/create')}
            >
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
      <S.ListWrraper>
        <S.ListContainer>
          {data?.data.lectures.content.map((item: LectureItemType) => (
            <LectureItem inside={false} item={item} key={item.id} />
          ))}
        </S.ListContainer>
      </S.ListWrraper>
    </div>
  )
}

export default LecturePage
