import styled from '@emotion/styled'
import { theme } from '../../../../styles/theme'

export const SignUpButtonContainer = styled.div<{ page: number }>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  margin-left: 3rem;
  margin-top: ${({ page }) => (page === 3 ? '0.7rem' : '1.5rem')};
`

export const PreButton = styled.button`
  width: 188px;
  height: 52px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.main};
  border-radius: 8px;
  cursor: pointer;
  ${theme.typo.text_lg};
  color: ${theme.color.main};
`

export const NextButton = styled.button<{ isNext: boolean }>`
  width: 188px;
  height: 52px;
  background-color: ${({ isNext }) =>
    isNext ? theme.color.main : theme.color.gray[700]};
  color: ${({ isNext }) =>
    isNext ? theme.color.white : theme.color.gray[400]};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  ${theme.typo.text_lg}
`
