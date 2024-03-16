import { InputCancel, LectureDates } from '@bitgouel/common'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { DateBox } from '../LectureApplyTime/style'
import { SearchInput } from '../style'
import * as S from './style'

const MaxDateLength = 10 as const
const MaxTimeLength = 5 as const

const LectureEnrollmentDates = () => {
  const [lectureDates, setLectureDates] = useRecoilState(LectureDates)
  return (
    <S.LectureEnrollmentDateWrapper>
      {lectureDates.map((_, idx) => (
        <S.EnrollmentDateContainer>
          <DateBox>
            <SearchInput
              type='text'
              placeholder='강의 수강일 입력(ex: 2000.11.11)'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLectureDates((prev) =>
                  prev.map((date, i) =>
                    idx === i
                      ? { ...date, completeDate: e.target.value }
                      : date
                  )
                )
              }}
              maxLength={MaxDateLength}
              style={{ width: '20.75rem' }}
            />
          </DateBox>
          <DateBox>
            <SearchInput
              type='text'
              placeholder='강의 시작 시간 입력'
              maxLength={MaxTimeLength}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLectureDates((prev) =>
                  prev.map((date, i) =>
                    idx === i ? { ...date, startTime: e.target.value } : date
                  )
                )
              }}
              style={{ width: '7.625rem' }}
            />
          </DateBox>
          <DateBox>
            <SearchInput
              type='text'
              placeholder='강의 종료 시간 입력'
              maxLength={MaxTimeLength}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLectureDates((prev) =>
                  prev.map((date, i) =>
                    idx === i ? { ...date, endTime: e.target.value } : date
                  )
                )
              }}
              style={{ width: '7.625rem' }}
            />
          </DateBox>
          {idx !== 0 && (
            <InputCancel
              onClick={() => {
                setLectureDates((prev) => prev.filter((_, i) => idx !== i))
              }}
            />
          )}
        </S.EnrollmentDateContainer>
      ))}
      <S.AddDateButton
        onClick={() =>
          setLectureDates((prev) => [
            ...prev,
            { completeDate: '', startTime: '', endTime: '' },
          ])
        }
      >
        + 날짜 추가하기
      </S.AddDateButton>
    </S.LectureEnrollmentDateWrapper>
  )
}

export default LectureEnrollmentDates
