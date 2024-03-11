import styled from '@emotion/styled'

export const InquiryAnswerModalWrapper = styled.div`
  width: 50rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const ModalTitleContainer = styled.div`
  width: 47rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};

  h2 {
    ${({ theme }) => theme.typo.title_sm.semibold};
    margin: 0;
  }
  svg {
    cursor: pointer;
  }
`

export const AnswerBox = styled.textarea`
  width: 47rem;
  height: 37.5rem;
  resize: none;
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_md.regular};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['400']};
    ${({ theme }) => theme.typo.text_md.regular};
  }
  padding: none;
  border: none;
  outline: none;
`

export const AnswerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 0.5rem;
  width: 10.25rem;
  height: 3.25rem;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  ${({ theme }) => theme.typo.text_lg.semibold};
`
