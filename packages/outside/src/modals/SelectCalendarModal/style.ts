import styled from '@emotion/styled'

export const SelectCalendarModalContainer = styled.div`
  position: fixed;
  top: 23rem;
  width: 332px;
  height: 308px;
  border-radius: 8px;
  background-color: #818181;

  &::after {
    content: '';
    position: absolute;
    top: 19rem;
    right: 9rem;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-top: 1.25rem solid #818181;
  }

  .react-calendar {
    background: none;
    color: ${({ theme }) => theme.color.white};
    border-radius: 1em;
    padding: 1rem;
    border: none;
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
      color: ${({ theme }) => theme.color.white};
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
    font-size: 12px;
    border-radius: 50%;

    :enabled:hover,
    :enabled:focus {
      background: ${({ theme }) => theme.color.main};
      color: ${({ theme }) => theme.color.white};
    }
  }
`