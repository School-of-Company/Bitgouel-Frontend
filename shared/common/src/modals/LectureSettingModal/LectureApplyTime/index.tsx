import {
  LectureEndDate,
  LectureEndTime,
  LectureStartDate,
  LectureStartTime,
} from '@bitgouel/common'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { SearchInput } from '../SearchComponent/style'
import * as S from './style'

const MaxDateLength: number = 8 as const
const MaxTimeLength: number = 5 as const

const LectureApplyTime = () => {
  const [lectureStartDate, setLectureStartDate] =
    useRecoilState(LectureStartDate)
  const [lectureStartTime, setLectureStartTime] =
    useRecoilState(LectureStartTime)
  const [lectureEndDate, setLectureEndDate] = useRecoilState(LectureEndDate)
  const [lectureEndTime, setLectureEndTime] = useRecoilState(LectureEndTime)
  return (
    <S.LectureApplyTimeWrapper>
      <S.TimeContainer>
        <S.DateBox>
          <SearchInput
            value={lectureStartDate}
            placeholder='신청 시작일 입력 (ex: 20240615)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureStartDate(e.target.value)
            }
            maxLength={MaxDateLength}
            style={{ width: '20.75rem' }}
          />
        </S.DateBox>
        <S.DateBox>
          <SearchInput
            value={lectureStartTime}
            placeholder='신청 시작 시간 입력 (ex: 14:30)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureStartTime(e.target.value)
            }
            maxLength={MaxTimeLength}
            style={{ width: '20.75rem' }}
          />
        </S.DateBox>
      </S.TimeContainer>
      <S.TimeContainer>
        <S.DateBox>
          <SearchInput
            value={lectureEndDate}
            placeholder='신청 마감일 입력 (ex: 20240615)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureEndDate(e.target.value)
            }
            maxLength={MaxDateLength}
            style={{ width: '20.75rem' }}
          />
        </S.DateBox>
        <S.DateBox>
          <SearchInput
            value={lectureEndTime}
            placeholder='신청 마감 시간 입력 (ex: 12:34)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureEndTime(e.target.value)
            }
            maxLength={MaxTimeLength}
            style={{ width: '20.75rem' }}
          />
        </S.DateBox>
      </S.TimeContainer>
    </S.LectureApplyTimeWrapper>
  )
}

export default LectureApplyTime
