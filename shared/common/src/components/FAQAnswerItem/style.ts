import styled from '@emotion/styled'

export const FAQAnswerItemWrapper = styled.div<{ isAdmin: boolean }>`
  display: ${({ isAdmin }) => (isAdmin ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0.0625rem 0.125rem 0 ${({ theme }) => theme.color.gray['700']};
  width: 100%;
  padding: 2rem 1.75rem;
  border-radius: 0.625rem;
  margin-bottom: 1.75rem;
`

export const Title = styled.div<{ answerView: boolean }>`
  ${({ theme }) => theme.typo.title_sm.regular};
  color: ${({ theme }) => theme.color.main};
  display: ${({ answerView }) => (answerView ? 'none' : 'flex')};
  cursor: pointer;
`

export const AnsweringBox = styled.div<{ answerView: boolean }>`
  display: ${({ answerView }) => (answerView ? 'block' : 'none')};
`

export const InputWrapper = styled.div`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
`

export const QMark = styled.span`
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.title_sm.regular};
  margin-right: 0.25rem;
`

export const Input = styled.input`
  ${({ theme }) => theme.typo.title_sm.regular};
  color: ${({ theme }) => theme.color.black};
  width: 100%;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
  &:focus {
    outline: none;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  span {
    ${({ theme }) => theme.typo.title_sm.regular};
    cursor: pointer;
  }
`

export const DeleteButton = styled.span`
  color: ${({ theme }) => theme.color.gray['700']};
  margin-right: 1.5rem;
`

export const SuccessButton = styled.span`
  color: ${({ theme }) => theme.color.main};
`
