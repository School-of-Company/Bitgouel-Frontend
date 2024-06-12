import styled from '@emotion/styled'

export const AppropriationModalWrapper = styled.div<{ isAdmin: boolean }>`
  width: 24rem;
  height: ${({ isAdmin }) => (isAdmin ? '7.875rem' : '13.375rem')};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ isAdmin }) => (isAdmin ? '1rem' : '1.8rem')};
`

export const AppropriationLetterContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  h2,
  p {
    margin: 0;
  }
`

export const AppropriationQuestion = styled.h2`
  ${({ theme }) => theme.typo.text_lg.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const AppropriationTitle = styled.p`
  width: 22rem;
  height: 3.75rem;
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AppropriationButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  button {
    width: 10.25rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.typo.text_lg.semibold}
    border-radius: 0.5rem;
    cursor: pointer;
  }
`

export const CancelButton = styled.button`
  background: none;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  color: ${({ theme }) => theme.color.gray['700']};
`

export const AppropriationButton = styled.button<{ isApprove: boolean }>`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme, isApprove }) =>
    isApprove ? theme.color.main : theme.color.error};
  border: 0.0625rem solid
    ${({ theme, isApprove }) =>
      isApprove ? theme.color.main : theme.color.error};

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray['700']};
    color: ${({ theme }) => theme.color.gray['400']};
    cursor: default;
  }
`
