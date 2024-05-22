import styled from '@emotion/styled'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.75rem;
`

export const MenuItem = styled.span<{ isError?: boolean }>`
  ${({ theme }) => theme.typo.caption.regular};
  color: ${({ theme, isError }) =>
    isError ? theme.color.error : theme.color.gray['400']};
`

