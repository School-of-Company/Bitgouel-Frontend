'use client'

import React, { ChangeEvent, useState } from 'react'
import * as S from './style'
import Calendar from 'react-calendar'
import { Chevron } from '@common/assets'

const SelectCalendarModal = ({
  date,
  setDate,
  setText,
}: {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
  setText: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [hour, setHour] = useState<number>(Number(new Date().getHours()))
  const [minutes, setMinutes] = useState<number>(
    Number(new Date().getMinutes())
  )

  return (
    <S.SelectCalendarModalWrapper>
      <S.TimeContainer>
        <S.ShowDateBox>
          <S.ShowDateText>{date.getFullYear()}년</S.ShowDateText>
          <S.ShowDateText>
            {(date.getMonth() + 1).toString().padStart(2, '0')}월
          </S.ShowDateText>
          <S.ShowDateText>{date.getDate()}일</S.ShowDateText>
        </S.ShowDateBox>
        <S.TimeBox>
          <S.InputTimeBox>
            <div
              onClick={() => hour !== 24 && setHour((prev) => prev + 1)}
              style={{ rotate: '180deg' }}
            >
              <Chevron color={'#ffffff'} />
            </div>
            <S.TimeInput
              value={hour.toString().padStart(2, '0')}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHour(+e.target.value)
              }
              type='number'
              maxLength={2}
            />
            <div onClick={() => hour !== 1 && setHour((prev) => prev - 1)}>
              <Chevron color={'#ffffff'} />
            </div>
          </S.InputTimeBox>
          <span>:</span>
          <S.InputTimeBox>
            <div
              onClick={() => minutes !== 59 && setMinutes((prev) => prev + 1)}
              style={{ rotate: '180deg' }}
            >
              <Chevron color={'#ffffff'} />
            </div>
            <S.TimeInput
              value={minutes.toString().padStart(2, '0')}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setMinutes(+e.target.value)
              }
              type='number'
              maxLength={2}
            />
            <div
              onClick={() => minutes !== 0 && setMinutes((prev) => prev - 1)}
            >
              <Chevron color={'#ffffff'} />
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
              `${value.getFullYear()}.${(value.getMonth() + 1)
                .toString()
                .padStart(2, '0')}.${value
                .getDate()
                .toString()
                .padStart(2, '0')}
                /
                ${hour.toString().padStart(2, '0')}
                :
                ${minutes.toString().padStart(2, '0')}
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
