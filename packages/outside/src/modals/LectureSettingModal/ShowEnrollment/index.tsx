'use client'

import { useRecoilState, useRecoilValue } from 'recoil'
import * as S from './style'
import {
  LectureEndDate,
  LectureEndTime,
  LectureStartDate,
  LectureStartTime,
  MinusTime,
  PlusTime,
  WaveIcon,
  theme,
} from '@bitgouel/common'

const ShowEnrollmentTime = () => {
  const startDate = useRecoilValue(LectureStartDate)
  const endDate = useRecoilValue(LectureEndDate)
  const [startTime, setStartTime] = useRecoilState(LectureStartTime)
  const [endTime, setEndTime] = useRecoilState(LectureEndTime)

  return (
    <S.ShowEnrollmentTimeWrapper>
      <S.ShowEnrollmentTimeContainer>
        <S.ShowEnrollmentTimeTextBox>
          <span>{`${startDate[0]}년 ${startDate[1]}월 ${startDate[2]}일`}</span>
          <span>{`${startTime[0]}시 ${startTime[1]}분`}</span>
        </S.ShowEnrollmentTimeTextBox>
        <S.TimeMarkContainer>
          <S.TimeMarkBox>
            <PlusTime
              onClick={() =>
                startTime[0] < 24 &&
                setStartTime((prev) => [prev[0] + 1, prev[1]])
              }
            />
            <span>{startTime[0]}</span>
            <MinusTime
              onClick={() =>
                startTime[0] > 0 &&
                setStartTime((prev) => [prev[0] - 1, prev[1]])
              }
            />
          </S.TimeMarkBox>
          <span style={{ color: theme.color.gray['700'] }}>:</span>
          <S.TimeMarkBox>
            <PlusTime
              onClick={() =>
                startTime[1] < 55 &&
                setStartTime((prev) => prev[1] >= 0 && [prev[0], prev[1] + 5])
              }
            />
            <span>{startTime[1]}</span>
            <MinusTime
              onClick={() =>
                startTime[1] > 0 &&
                setStartTime((prev) => prev[1] >= 0 && [prev[0], prev[1] - 5])
              }
            />
          </S.TimeMarkBox>
        </S.TimeMarkContainer>
      </S.ShowEnrollmentTimeContainer>
      <WaveIcon />
      <S.ShowEnrollmentTimeContainer>
        <S.ShowEnrollmentTimeTextBox>
          <span>{`${endDate[0]}년 ${endDate[1]}월 ${endDate[2]}일`}</span>
          <span>{`${endTime[0]}시 ${endTime[1]}분`}</span>
        </S.ShowEnrollmentTimeTextBox>
        <S.TimeMarkContainer>
          <S.TimeMarkBox>
            <PlusTime
              onClick={() =>
                endTime[0] < 24 && setEndTime((prev) => [prev[0] + 1, prev[1]])
              }
            />
            <span>{endTime[0]}</span>
            <MinusTime
              onClick={() =>
                endTime[0] > 0 && setEndTime((prev) => [prev[0] - 1, prev[1]])
              }
            />
          </S.TimeMarkBox>
          <span style={{ color: theme.color.gray['700'] }}>:</span>
          <S.TimeMarkBox>
            <PlusTime
              onClick={() =>
                endTime[1] < 55 &&
                setEndTime((prev) => prev[1] >= 0 && [prev[0], prev[1] + 1])
              }
            />
            <span>{endTime[1]}</span>
            <MinusTime
              onClick={() =>
                endTime[1] > 0 &&
                setEndTime((prev) => prev[1] >= 0 && [prev[0], prev[1] - 1])
              }
            />
          </S.TimeMarkBox>
        </S.TimeMarkContainer>
      </S.ShowEnrollmentTimeContainer>
    </S.ShowEnrollmentTimeWrapper>
  )
}

export default ShowEnrollmentTime
