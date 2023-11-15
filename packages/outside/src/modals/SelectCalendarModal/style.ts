import styled from '@emotion/styled'

export const SelectCalendarModalWrapper = styled.div`
  bottom: 9rem;
  position: fixed;
  width: 33.25rem;
  height: 19.25rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.gray[500]};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: '';
    position: absolute;
    top: 19rem;
    right: 9rem;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-top: 1.25rem solid ${({ theme }) => theme.color.gray[500]};
  }
`

export const TimeContainer = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-left: 1rem;
  border-right: 1px solid ${({ theme }) => theme.color.gray['700']};
`

export const ShowDateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ShowDateText = styled.h2`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_sm};
  margin: 0;
`

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.color.white};
  }
`

export const InputTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }
`

export const TimeInput = styled.input`
  width: 3.5rem;
  height: 2.625rem;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray['400']};
  color: ${({ theme }) => theme.color.white};
  outline: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  padding-left: 1.1rem;
  ${({ theme }) => theme.typo.text_lg}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const CalendarContainer = styled.div`
  .react-calendar {
    background: none;
    color: ${({ theme }) => theme.color.white};
    border-radius: 1em;
    padding: 1rem;
    border: none;
    width: 18.75rem;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    button {
      color: ${({ theme }) => theme.color.white};
      min-width: 15%;
      background: none;
      font-size: 1.8rem;
      border: none;
      cursor: pointer;
    }
  }

  .react-calendar__navigation__label {
    span {
      color: ${({ theme }) => theme.color.white};
    }
  }

  .react-calendar__month-view__weekdays {
    abbr {
      display: none;
    }
  }

  .react-calendar__month-view__days {
    background: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    button {
      width: 2.5rem;
      height: 2.5rem;
      background: transparent;
      color: ${({ theme }) => theme.color.white};
      border: none;

      abbr {
        ${({ theme }) => theme.typo.text_md}
        cursor: pointer;
      }
    }

    .react-calendar__tile--range {
      background: ${({ theme }) => theme.color.main};
      color: ${({ theme }) => theme.color.white};
    }
  }

  .react-calendar__tile--active {
    background: ${({ theme }) => theme.color.main};
    border-radius: 0.5em;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    font-size: 0.75rem;
    border-radius: 50%;

    :enabled:hover,
    :enabled:focus {
      background: ${({ theme }) => theme.color.main};
      color: ${({ theme }) => theme.color.white};
    }
  }
`
