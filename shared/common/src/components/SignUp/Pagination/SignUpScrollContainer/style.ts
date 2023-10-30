import styled from '@emotion/styled'
import { theme } from '../../../../styles/theme'

export const SignUpScrollContainer = styled.div<{ idx: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: auto;
  overflow-y: scroll;
  background-color: #ffffff;
  border: 1px solid ${theme.color.gray[700]};
  display: flex;
  flex-direction: column;
  align-items: center;
`
