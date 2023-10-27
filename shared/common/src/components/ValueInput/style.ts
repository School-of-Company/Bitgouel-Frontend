import styled from '@emotion/styled'
import { theme } from '../../../../styles/theme'

export const ValueInput = styled.input`
  width: 384px;
  height: 54px;

  border: 1px solid ${theme.color.gray['700']};
  border-radius: 8px;
  outline: none;
  text-indent: 20px;

  ${theme.typo.text_sm};

  ::placeholder {
    color: ${theme.color.gray['400']};
    ${theme.typo.text_sm};
  }
`
