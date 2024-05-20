import styled from '@emotion/styled'

export const InputTitle = styled.input`
  ${({ theme }) => theme.typo.title_md.semibold};
  color: ${({ theme }) => theme.color.black};
  outline: none;
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray['1000']};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const InputMainText = styled.textarea`
  ${({ theme }) => theme.typo.text_lg.regular};
  color: ${({ theme }) => theme.color.black};
  margin-top: 0.5rem;
  height: 19.25rem;
  background-color: ${({ theme }) => theme.color.gray['1000']};
  outline: none;
  border: none;
  width: 100%;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const PostSetting = styled.div`
  position: absolute;
  bottom: 6.25rem;
  width: 100%;
`

export const SettingTitle = styled.div`
  ${({ theme }) => theme.typo.text_lg.semibold};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const SettingSelectionContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`

export const SettingForm = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray['700']};
`

export const SettingInput = styled.input`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.gray['1000']};
  color: ${({ theme }) => theme.color.gray['700']};
  ${({ theme }) => theme.typo.text_md.regular}

  &::placeholder {
    ${({ theme }) => theme.typo.text_md.regular}
    color: ${({ theme }) => theme.color.gray['700']};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PostButton = styled.div<{ isAble: boolean }>`
  ${({ theme }) => theme.typo.text_lg.semibold};
  background-color: ${({ theme, isAble }) =>
    isAble ? theme.color.main : theme.color.gray['700']};
  color: ${({ theme, isAble }) =>
    isAble ? theme.color.white : theme.color.gray['400']};
  cursor: pointer;
  bottom: 1.75rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.25rem;
  height: 3.25rem;
  border-radius: 0.5rem;
`
