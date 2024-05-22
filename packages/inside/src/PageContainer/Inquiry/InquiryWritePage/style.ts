import styled from '@emotion/styled'

export const InputTitle = styled.input`
  ${({ theme }) => theme.typo.title_md.semibold};
  color: ${({ theme }) => theme.color.black};
  outline: none;
  border: none;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const InputMainText = styled.textarea`
  ${({ theme }) => theme.typo.text_lg.regular};
  color: ${({ theme }) => theme.color.black};
  margin-top: 0.5rem;
  height: 19.25rem;
  outline: none;
  border: none;
  width: 100%;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CreateButton = styled.div<{ isAble: boolean }>`
  background-color: ${({ theme, isAble }) =>
    isAble ? theme.color.main : theme.color.gray['700']};
  color: ${({ theme, isAble }) =>
    isAble ? theme.color.white : theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.semibold};
  cursor: pointer;
  bottom: 1.75rem;
  position: fixed;
  padding: 0.85rem 2.725rem;
  border-radius: 0.5rem;
`
