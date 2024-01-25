import styled from '@emotion/styled'

export const ChangePwContainer = styled.div`
  position: relative;
  width: 27rem;
  height: 34.6875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 0.5rem;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`

export const ChangePwButtonContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    width: 11.75rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`

export const CancelButton = styled.div`
  color: ${({ theme }) => theme.color.main};
  background: none;
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
`

export const CompleteButton = styled.div<{ isValid: boolean }>`
  color: ${({ theme, isValid }) =>
    isValid ? theme.color.white : theme.color.gray['400']};
  background-color: ${({ theme, isValid }) =>
    isValid ? theme.color.main : theme.color.gray['700']};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
`
