import styled from '@emotion/styled'

export const ModifyFieldScrollBox = styled.div<{ width?: string }>`
  width: ${({ width }) => width};
  cursor: pointer;
  position: relative;
`

export const ModifyUnderBar = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 1.375rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.medium};
`