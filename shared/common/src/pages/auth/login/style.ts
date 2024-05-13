import styled from '@emotion/styled'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.75rem;
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  span {
    width: 100%;
    margin-left: 3.2rem;
    margin-top: -1rem;
  }
`

export const PasswordContainer = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`

export const MenuItem = styled.span<{ isError?: boolean }>`
  ${({ theme }) => theme.typo.caption.regular};
  color: ${({ theme, isError }) =>
    isError ? theme.color.error : theme.color.gray['400']};
`

export const PasswordSearch = styled.span`
  ${({ theme }) => theme.typo.caption.regular};
  color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`

export const LoginButtonWrapper = styled.div`
  width: 100%;
  height: 6.625rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const LoginButton = styled.button<{ isAble: boolean }>`
  background-color: ${({ theme, isAble }) =>
    isAble ? theme.color.main : theme.color.gray['700']};
  color: ${({ theme, isAble }) =>
    isAble ? theme.color.white : theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.semibold};
  width: 24rem;
  height: 3.25rem;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
`

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
