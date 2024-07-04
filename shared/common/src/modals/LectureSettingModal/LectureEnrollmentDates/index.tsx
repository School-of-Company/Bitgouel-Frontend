import { InputCancel, LectureDates } from '@bitgouel/common'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { DateBox } from '../LectureApplyTime/style'
import { SearchInput } from '../SearchComponent/style'
import * as S from './style'

const MaxDateLength: number = 8 as const
const MaxTimeLength: number = 5 as const
type timeTypes = 'start' | 'end'

const LectureEnrollmentDates = () => {
  const [lectureDates, setLectureDates] = useRecoilState(LectureDates)

  const onAddDates = () =>
    setLectureDates((prev) => [
      ...prev,
      {
        completeDate: '',
        startShowTime: '',
        startTime: '',
        endShowTime: '',
        endTime: '',
      },
    ])

  const onCompleteDateChange = (idx: number, value: string) =>
    setLectureDates((prev) =>
      prev.map((date, i) =>
        idx === i ? { ...date, completeDate: value } : date
      )
    )

  const handleTimeChange = (time: timeTypes, idx: number, value: string) => {
    if (time === 'start') {
      setLectureDates((prev) =>
        prev.map((date, i) =>
          idx === i
            ? {
                ...date,
                startShowTime: value,
                startTime: value + ':00',
              }
            : date
        )
      )
    } else {
      setLectureDates((prev) =>
        prev.map((date, i) =>
          idx === i
            ? {
                ...date,
                endShowTime: value,
                endTime: value + ':00',
              }
            : date
        )
      )
    }
  }

  const onDeleteDate = (idx: number) =>
    setLectureDates((prev) => prev.filter((_, i) => idx !== i))

  return (
    <S.LectureEnrollmentDateWrapper>
      {lectureDates.map((value, idx) => (
        <S.EnrollmentDateContainer key={idx}>
          <DateBox>
            <SearchInput
              value={value.completeDate}
              type='text'
              placeholder='강의 수강일 입력(ex: 20001111)'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onCompleteDateChange(idx, e.target.value)
              }
              maxLength={MaxDateLength}
              style={{ width: '20.75rem' }}
            />
          </DateBox>
          <DateBox>
            <SearchInput
              value={value.startShowTime}
              type='text'
              placeholder='강의 시작 시간 입력'
              maxLength={MaxTimeLength}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleTimeChange('start', idx, e.target.value)
              }
              style={{ width: '7.625rem' }}
            />
          </DateBox>
          <DateBox>
            <SearchInput
              value={value.endShowTime}
              type='text'
              placeholder='강의 종료 시간 입력'
              maxLength={MaxTimeLength}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleTimeChange('end', idx, e.target.value)
              }
              style={{ width: '7.625rem' }}
            />
          </DateBox>

          {idx !== 0 && <InputCancel onClick={() => onDeleteDate(idx)} />}
        </S.EnrollmentDateContainer>
      ))}
      <S.AddDateButton onClick={onAddDates}>+ 날짜 추가하기</S.AddDateButton>
    </S.LectureEnrollmentDateWrapper>
  )
}

export default LectureEnrollmentDates
