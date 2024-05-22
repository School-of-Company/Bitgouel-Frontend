import styled from '@emotion/styled'

export const InputRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

export const RadioInputBox = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  border-radius: 0.5rem;
  padding: 1.0625rem 1.25rem;
`

export const RadioInput = styled.input`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.black};
  border: none;
  outline: none;
  width: 19.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['700']};
  }
`
