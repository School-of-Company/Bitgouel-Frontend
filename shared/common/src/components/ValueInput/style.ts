import styled from '@emotion/styled'
import { theme } from '../../../../styles/theme'

export const ValueInput = styled.input`
  width: 24rem;
  height: 3.375rem;

  border: 0.0625rem solid ${theme.color.gray['700']};
  border-radius: 0.5rem;
  outline: none;
  text-indent: 1.25rem;

  ${theme.typo.text_sm};

  ::placeholder {
    color: ${theme.color.gray['400']};
    ${theme.typo.text_sm};
  }
`
