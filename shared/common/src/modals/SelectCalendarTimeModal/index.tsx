'use client'

import { SelectCalendarModalProps } from '@bitgouel/types'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { Chevron } from '../../assets'
import { theme } from '../../styles'
import * as S from './style'

const SelectCalendarTimeModal = ({
  date,
  setDate,
  setText,
}: SelectCalendarModalProps) => {
  const weeks: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일'
  ] = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']
  const [hour, setHour] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)

  const handleHourUpDown = (increase: boolean) => {
    if (increase) {
      setHour((prev) => prev + 1)
      setText(
        `${date.getFullYear()}년 ${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}월 ${date.getDate().toString().padStart(2, '0')}일 
          ${(hour + 1).toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}
        `
      )
    } else {
      setHour((prev) => prev - 1)
      setText(
        `${date.getFullYear()}년 ${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}월 ${date.getDate().toString().padStart(2, '0')}일 
          ${(hour - 1).toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}
        `
      )
    }
  }

  const handleMinutesUpDown = (increase: boolean) => {
    if (increase) {
      setMinutes((prev) => prev + 5)
      setText(
        `${date.getFullYear()}년 ${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}월 ${date.getDate().toString().padStart(2, '0')}일 
          ${hour.toString().padStart(2, '0')}:${(minutes + 5)
          .toString()
          .padStart(2, '0')}
        `
      )
    } else {
      setMinutes((prev) => prev - 5)
      setText(
        `${date.getFullYear()}년 ${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}월 ${date.getDate().toString().padStart(2, '0')}일 
          ${hour.toString().padStart(2, '0')}:${(minutes - 5)
          .toString()
          .padStart(2, '0')}
        `
      )
    }
  }

  return (
    <S.SelectCalendarTimeModalWrapper>
      <S.TimeContainer>
        <S.ShowDateBox>
          <S.ShowDateText>{date.getFullYear()}년</S.ShowDateText>
          <S.ShowDateText>
            {(date.getMonth() + 1).toString().padStart(2, '0')}월
          </S.ShowDateText>
          <S.ShowDateText>{date.getDate()}일</S.ShowDateText>
          <S.ShowDateText>{weeks[date.getDay() - 1]}</S.ShowDateText>
        </S.ShowDateBox>
        <S.TimeBox>
          <S.InputTimeBox>
            <div
              onClick={() => hour !== 24 && handleHourUpDown(true)}
              style={{ rotate: '180deg' }}
            >
              <Chevron color={`${theme.color.white}`} />
            </div>
            <S.TimeInput
              value={hour.toString().padStart(2, '0')}
              type='number'
              maxLength={2}
              disabled={true}
            />
            <Chevron
              onClick={() => hour !== 0 && handleHourUpDown(false)}
              color={`${theme.color.white}`}
            />
          </S.InputTimeBox>
          <span>:</span>
          <S.InputTimeBox>
            <div
              onClick={() => minutes !== 55 && handleMinutesUpDown(true)}
              style={{ rotate: '180deg' }}
            >
              <Chevron color={`${theme.color.white}`} />
            </div>
            <S.TimeInput
              value={minutes.toString().padStart(2, '0')}
              type='number'
              maxLength={2}
              disabled={true}
            />
            <Chevron
              onClick={() => minutes !== 0 && handleMinutesUpDown(false)}
              color={`${theme.color.white}`}
            />
          </S.InputTimeBox>
        </S.TimeBox>
      </S.TimeContainer>
      <S.CalendarContainer>
        <Calendar
          value={date}
          onChange={(value) => {
            if (!(value instanceof Date)) return
            setDate(value)
            setText(
              `${value.getFullYear()}년 ${(value.getMonth() + 1)
                .toString()
                .padStart(2, '0')}월 ${value
                .getDate()
                .toString()
                .padStart(2, '0')}일 
                ${hour.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}
              `
            )
          }}
          locale='ko'
          formatDay={(_locale, date) =>
            date.toLocaleString('en', { day: 'numeric' })
          }
          calendarType='US'
        />
      </S.CalendarContainer>
    </S.SelectCalendarTimeModalWrapper>
  )
}

export default SelectCalendarTimeModal
