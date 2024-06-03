import styled from '@emotion/styled'

export const PasswordContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`

export const PasswordSearch = styled.span`
  ${({ theme }) => theme.typo.caption.regular};
  color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`

export const MenuItem = styled.span<{ isError?: boolean }>`
  ${({ theme }) => theme.typo.caption.regular};
  color: ${({ theme, isError }) =>
    isError ? theme.color.error : theme.color.gray['400']};
`
