import styled from '@emotion/styled'

export const LectureCreateModalWrapper = styled.div`
  width: 24rem;
  height: 13.375rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`

export const LectureLetterContainer = styled.div`
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

export const LectureCreateQuestion = styled.h2`
  ${({ theme }) => theme.typo.text_lg};
  color: ${({ theme }) => theme.color.black};
`

export const LectureCreateTitle = styled.p`
  width: 22rem;
  height: 3.75rem;
  ${({ theme }) => theme.typo.text_sm};
  color: ${({ theme }) => theme.color.gray['400']};
  text-align: center;
`

export const LectureCreateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    width: 10.25rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.typo.text_lg}
    border: 0.0625rem solid ${({ theme }) => theme.color.main};
    border-radius: 8px;
    cursor: pointer;
  }
`

export const CancleButton = styled.div`
  color: ${({ theme }) => theme.color.main};
  background: none;
`

export const CreateButton = styled.div`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.main};
`
