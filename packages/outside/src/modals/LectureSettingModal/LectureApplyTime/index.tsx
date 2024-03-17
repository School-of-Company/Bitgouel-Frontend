import {
  LectureEndDate,
  LectureEndTime,
  LectureStartDate,
  LectureStartTime,
} from '@bitgouel/common'
import { useSetRecoilState } from 'recoil'
import { SearchInput } from '../style'
import * as S from './style'
import { ChangeEvent } from 'react'

const MaxDateLength: number = 10 as const
const MaxTimeLength: number = 5 as const

const LectureApplyTime = () => {
  const setLectureStartDate = useSetRecoilState(LectureStartDate)
  const setLectureStartTime = useSetRecoilState(LectureStartTime)
  const setLectureEndDate = useSetRecoilState(LectureEndDate)
  const setLectureEndTime = useSetRecoilState(LectureEndTime)
  return (
    <S.LectureApplyTimeWrapper>
      <S.TimeContainer>
        <S.DateBox>
          <SearchInput
            placeholder='신청 시작일 입력 (ex: 2000.11.11)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureStartDate(e.target.value)
            }
            maxLength={MaxDateLength}
            style={{ width: '20.75rem' }}
          />
        </S.DateBox>
        <S.DateBox>
          <SearchInput
            placeholder='신청 시작 시간 입력 (ex: 12:34)'
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
            placeholder='신청 마감일 입력 (ex: 2000.11.11)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureEndDate(e.target.value)
            }
            maxLength={MaxDateLength}
            style={{ width: '20.75rem' }}
          />
        </S.DateBox>
        <S.DateBox>
          <SearchInput
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
