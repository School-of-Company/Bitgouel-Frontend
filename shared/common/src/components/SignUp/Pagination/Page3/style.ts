import styled from '@emotion/styled'
import { theme } from '../../../../styles'

export const CertificationButton = styled.div`
  width: 4.5rem;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  margin-right: 1.5rem;
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  ${theme.typo.text_lg};
  border-radius: 0.5rem;
  cursor: pointer;
`
