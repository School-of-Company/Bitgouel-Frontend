import styled from '@emotion/styled'

export const NewPasswordContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`

export const FinishButton = styled.div<{ numStatus: boolean }>`
  background-color: ${({ theme, numStatus }) =>
    numStatus ? theme.color.main : theme.color.gray['700']};
  color: ${({ theme, numStatus }) =>
    numStatus ? theme.color.white : theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.semibold};
  display: flex;
  width: 5rem;
  height: 3.5rem;
  justify-content: center;
  margin-left: 0.5rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
`

export const PasswordInputContainer = styled.div`
  div {
    margin-bottom: 0.5rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 24.125rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  div {
    width: 11.75rem;
    height: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    ${({ theme }) => theme.typo.text_lg.semibold};
    cursor: pointer;
  }
`

export const PreButton = styled.div`
  color: ${({ theme }) => theme.color.main};
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
`

export const NextButton = styled.div<{ statusColor: boolean }>`
  background-color: ${({ theme, statusColor }) =>
    statusColor ? theme.color.main : theme.color.gray['700']};
  color: ${({ theme, statusColor }) =>
    statusColor ? theme.color.white : theme.color.gray['400']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
`
