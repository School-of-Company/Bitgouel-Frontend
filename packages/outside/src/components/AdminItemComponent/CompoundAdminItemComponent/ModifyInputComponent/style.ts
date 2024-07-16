import styled from '@emotion/styled'

export const ModifyInputBox = styled.div<{ width?: string }>`
  width: ${({ width }) => width};
`

export const ModifyInput = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.medium};
`
