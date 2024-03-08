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
`

export const SettingTitleBox = styled.div`
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
