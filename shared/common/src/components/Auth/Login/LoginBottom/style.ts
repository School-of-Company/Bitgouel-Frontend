import styled from '@emotion/styled'

export const JoinWrapper = styled.div`
  width: 100%;
  height: 5.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const MenuItem = styled.span<{ isError?: boolean }>`
  ${({ theme }) => theme.typo.caption.regular};
  color: ${({ theme, isError }) =>
    isError ? theme.color.error : theme.color.gray['400']};
`

export const NoAccountItem = styled.span`
  ${({ theme }) => theme.typo.text_md.regular};
  color: ${({ theme }) => theme.color.black};
`

export const UserJoinItem = styled.span`
  ${({ theme }) => theme.typo.text_md.regular};
  color: ${({ theme }) => theme.color.main};
  margin-left: 0.25rem;
  cursor: pointer;
`
