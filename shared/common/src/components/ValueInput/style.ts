import styled from '@emotion/styled'
import { theme } from '../../../../styles/theme'

export const ValueWrapper = styled.div`
  width: 24rem;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`

export const ValueInput = styled.input`
  width: 24rem;
  height: 3.375rem;

  border: 0.0625rem solid ${theme.color.gray['700']};
  border-radius: 0.5rem;
  outline: none;
  text-indent: 1.25rem;

  ${theme.typo.text_sm};

  input:focus {
    border: 1px solid ${theme.color.main};
  }

  ::placeholder {
    color: ${theme.color.gray['400']};
    ${theme.typo.text_sm};
  }
`

export const XIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  margin-right: 20px;
`
