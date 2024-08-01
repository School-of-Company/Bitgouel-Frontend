import styled from '@emotion/styled'
import { theme } from '../../../../../styles'

export const SignUpButtonContainer = styled.div<{ page: number }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.3rem;
`

export const PreButton = styled.button`
  width: 11.75rem;
  height: 3.25rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
  border-radius: 0.5rem;
  cursor: pointer;
  ${({ theme }) => theme.typo.text_lg.semibold};
  color: ${({ theme }) => theme.color.main};
`

export const NextButton = styled.button<{ isNext: boolean }>`
  width: 11.75rem;
  height: 3.25rem;
  background-color: ${({ isNext }) =>
    isNext ? theme.color.main : theme.color.gray['700']};
  color: ${({ isNext }) =>
    isNext ? theme.color.white : theme.color.gray['400']};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  ${({ theme }) => theme.typo.text_lg.semibold};
`
