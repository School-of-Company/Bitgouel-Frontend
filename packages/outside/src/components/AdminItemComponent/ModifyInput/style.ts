import styled from '@emotion/styled'

export const ModifyInputBox = styled.div`
  width: 110rem;
  margin-left: 2.75rem;
`

export const ModifyInput = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_md.medium};
`
