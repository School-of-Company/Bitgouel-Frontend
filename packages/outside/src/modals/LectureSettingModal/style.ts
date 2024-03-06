import styled from '@emotion/styled'

export const LectureSettingModalWrapper = styled.div`
  width: 48rem;
  height: 35rem;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1.5rem;
  gap: 1rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  .MuiPickersCalendarHeader-root,
  .MuiDayCalendar-weekContainer {
    margin: 0;
  }
  .MuiButtonBase-root {
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.typo.text_sm.regular};
  }
  .MuiDateRangeCalendar-monthContainer {
    width: 19.75rem;
    height: 18.25rem;
    padding: 0.5rem 0;
  }
  .css-grqin-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected,
  .css-1a4q4r2-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected,
  .css-1x94ue7-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected {
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.white};
    width: 2.25rem;
    height: 2.25rem;
  }
  .css-gtjfra-MuiDateRangePickerDay-root,
  .css-1gbl7yn-MuiDateRangePickerDay-root,
  .css-1i2r8k1-MuiDateRangePickerDay-root,
  .css-12tpyw1 .css-1i2r8k1-MuiDateRangePickerDay-root {
    background-color: ${({ theme }) => theme.color.blue['800']};
  }
  .MuiPickersToolbar-root,
  .MuiDialogActions-root,
  .MuiDayCalendar-header,
  .MuiDateRangePickerDay-rangeIntervalPreview
    css-1o490ea-MuiDateRangePickerDay-rangeIntervalPreview {
    display: none;
  }
`

export const SettingTitleBox = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 1.5rem;
  margin-bottom: 1.5rem;

  h3 {
    margin: 0;
    ${({ theme }) => theme.typo.title_sm.semibold};
  }
`

export const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  span {
    ${({ theme }) => theme.typo.text_lg.semibold};
  }
`

export const EnumSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    ${({ theme }) => theme.typo.text_md.medium};
  }
`

export const EnumBox = styled.div<{ current: string; selected: string }>`
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  background-color: ${({ theme, current, selected }) =>
    current === selected ? theme.color.main : theme.color.white};
  color: ${({ theme, current, selected }) =>
    current === selected ? theme.color.white : theme.color.gray['400']};
  border: 0.0625rem solid
    ${({ theme, current, selected }) =>
      current === selected ? theme.color.main : theme.color.gray['400']};
  border-radius: 6.1875rem;
  cursor: pointer;

  span {
    ${({ theme }) => theme.typo.text_lg.medium};
  }
`

export const EnrollmentDateBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4rem;
  justify-content: space-between;
  gap: 3rem;
`