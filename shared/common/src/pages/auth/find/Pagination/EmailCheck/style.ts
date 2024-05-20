import styled from '@emotion/styled'

export const EmailInputContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const EmailBox = styled.div`
  display: flex;
  width: 24rem;
  justify-content: space-between;
  margin-bottom: 0.35rem;
`

export const FirstNumberInput = styled.div`
  display: flex;
  flex-wrap: wrap;
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
