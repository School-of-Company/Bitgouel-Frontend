'use client'

import React, { ChangeEvent, useState } from 'react'
import * as S from './style'
import Calendar from 'react-calendar'
import { Chevron } from '../../assets'
import { SelectCalendarModalProps } from '@bitgouel/types'
import { theme } from '../../styles'

const SelectCalendarModal = ({
  date,
  setDate,
  setText,
}: SelectCalendarModalProps) => {
  const weeks: string[] = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ]
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
    <S.SelectCalendarModalWrapper>
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
            <div onClick={() => hour !== 0 && handleHourUpDown(false)}>
              <Chevron color={`${theme.color.white}`} />
            </div>
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
            <div onClick={() => minutes !== 0 && handleMinutesUpDown(false)}>
              <Chevron color={`${theme.color.white}`} />
            </div>
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
    </S.SelectCalendarModalWrapper>
  )
}

export default SelectCalendarModal
