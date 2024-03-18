import styled from '@emotion/styled'

export const SelectCalendarModalWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  right: -16.4rem;
  width: 20rem;
  height: 18rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(129, 129, 129, 0.6);
  z-index: 99;

  &::after {
    content: '';
    position: absolute;
    top: 18rem;
    right: 16rem;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-top: 1.25rem solid rgba(129, 129, 129, 0.6);
  }
`

export const ShowDateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ShowDateText = styled.h2`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_sm.semibold};
  margin: 0;
`

export const CalendarContainer = styled.div`
  .react-calendar {
    background: none;
    color: ${({ theme }) => theme.color.white};
    border-radius: 0.5rem;
    padding: 0.8rem;
    border: none;
    width: 18.75rem;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    button {
      color: ${({ theme }) => theme.color.white};
      ${({ theme }) => theme.typo.title_sm.regular};
      min-width: 15%;
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .react-calendar__navigation__label {
    span {
      ${({theme}) => theme.typo.text_md.regular};
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
        ${({ theme }) => theme.typo.text_md.regular}
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
