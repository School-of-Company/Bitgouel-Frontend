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

export const CreateButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 2.5rem;
`

export const CreateButton = styled.div<{ isAble: boolean }>`
  color: ${({ theme, isAble }) =>
    isAble ? theme.color.white : theme.color.gray['400']};
  background-color: ${({ theme, isAble }) =>
    isAble ? theme.color.main : theme.color.gray['700']};
  ${({ theme }) => theme.typo.text_lg.semibold};
  padding: 0.75rem 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`
