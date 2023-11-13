import React from 'react'
import * as S from './style'
import Calendar from 'react-calendar'

const SelectCalendarModal = ({
  date,
  setDate,
  setText,
}: {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
  setText: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <S.SelectCalendarModalContainer>
      <Calendar
        value={date}
        onChange={(value) => {
          if (!(value instanceof Date)) return
          setDate(value)
          setText(
            `${value.getFullYear()}.${(value.getMonth() + 1)
              .toString()
              .padStart(2, '0')}.${value.getDate().toString().padStart(2, '0')}`
          )
        }}
        locale='ko'
        formatDay={(_locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        calendarType='US'
      />
    </S.SelectCalendarModalContainer>
  )
}

export default SelectCalendarModal
