'use client'

import { SelectCalendarModalProps } from '@bitgouel/types'
import Calendar from 'react-calendar'
import * as S from './style'

const SelectCalendarModal = ({
  date,
  setDate,
  setText,
}: SelectCalendarModalProps) => {
  return (
    <S.SelectCalendarModalWrapper>
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
