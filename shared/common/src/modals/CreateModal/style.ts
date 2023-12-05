import styled from '@emotion/styled'

export const CreateModalWrapper = styled.div`
  width: 24rem;
  height: 13.375rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`

export const LetterContainer = styled.div`
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

export const CreateQuestion = styled.h2`
  ${({ theme }) => theme.typo.text_lg.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const CreateTitle = styled.p`
  width: 22rem;
  height: 3.75rem;
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CreateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
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

export const CancelButton = styled.div`
  color: ${({ theme }) => theme.color.main};
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
  background: none;
`

export const CreateButton = styled.div`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.main};
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
`
