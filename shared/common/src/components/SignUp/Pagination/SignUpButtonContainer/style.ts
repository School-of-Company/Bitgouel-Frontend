import styled from '@emotion/styled'
import { theme } from '../../../../styles'

export const SignUpButtonContainer = styled.div<{ page: number }>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  margin-left: 3rem;
  margin-top: ${({ page }) => (page === 3 ? '0.7rem' : '2rem')};
`

export const PreButton = styled.button`
  width: 11.75rem;
  height: 3.25rem;
  background-color: ${theme.color.white};
  border: 0.0625rem solid ${theme.color.main};
  border-radius: 0.5rem;
  cursor: pointer;
  ${theme.typo.text_lg};
  color: ${theme.color.main};
`

export const NextButton = styled.button<{ isNext: boolean }>`
  width: 11.75rem;
  height: 3.25rem;
  background-color: ${({ isNext }) =>
    isNext ? theme.color.main : theme.color.gray[700]};
  color: ${({ isNext }) =>
    isNext ? theme.color.white : theme.color.gray[400]};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  ${theme.typo.text_lg}
`
