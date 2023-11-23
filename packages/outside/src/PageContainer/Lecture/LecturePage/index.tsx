'use client'

import { Filter, Plus } from '@bitgouel/common'
import Bg3 from '@bitgouel/common/src/assets/png/mainBg3.png'
import { LectureTypeText } from '@bitgouel/common/src/atoms'
import { LectureItem } from '@bitgouel/common/src/components'
import { LectureTypeModal } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'
import { lectureToEnum } from '@bitgouel/common/src/constants'
import { useGetLectureList } from '@bitgouel/api'

const LecturePage = () => {
  const router = useRouter()
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [lectureTypeText, setLectureTypeText] =
    useRecoilState<string>(LectureTypeText)

  const { data } = useGetLectureList({
    page: 0,
    size: 1,
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
          {data.data.lectures.map((item) => (
            <LectureItem inside={false} item={item} key={item.id} />
          ))}
        </S.ListContainer>
      </S.ListWrraper>
    </div>
  )
}

export default LecturePage
