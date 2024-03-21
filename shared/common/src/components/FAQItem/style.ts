import styled from '@emotion/styled'

export const FAQItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0.0625rem 0.125rem 0 ${({ theme }) => theme.color.gray['700']};
  width: 100%;
  padding: 2rem 1.75rem;
  border-radius: 0.625rem;
  margin-bottom: 1.75rem;
  cursor: pointer;
  span {
    ${({ theme }) => theme.typo.title_sm.regular};
  }
`

export const TitleBox = styled.div`
  display: flex;
`

export const QMark = styled.span`
  color: ${({ theme }) => theme.color.main};
  margin-right: 0.25rem;
`

export const AnswerBox = styled.div<{ answerStatus: boolean }>`
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  display: ${({ answerStatus }) => (answerStatus ? 'flex' : 'none')};
`
export const Answer = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
`
