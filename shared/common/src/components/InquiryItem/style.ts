import { AnswerStatus } from '@bitgouel/types/src/common/AnswerStatus'
import styled from '@emotion/styled'

export const InquiryItemWrapper = styled.div`
  padding: 0.5rem 0;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  cursor: pointer;
`

export const SubTitle = styled.div`
  padding: 0.5rem 0;
  span {
    ${({ theme }) => theme.typo.text_sm.regular};
  }
`

export const Name = styled.span`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.color.black};
`

export const Date = styled.span`
  color: ${({ theme }) => theme.color.gray['700']};
`

export const Title = styled.span`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.semibold};
`

export const MainTextContainer = styled.section`
  margin: 0.75rem 0;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const MainText = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const SubMenuContainer = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  display: flex;
`

export const StatusFrom = styled.div<{ status: AnswerStatus }>`
  ${({ theme }) => theme.typo.caption.regular};
  color: ${({ status, theme }) =>
    status === 'UNANSWERED' ? theme.color.error : theme.color.main};
  background-color: ${({ status, theme }) =>
    status === 'UNANSWERED' ? theme.color.red['800'] : theme.color.blue['800']};
  display: flex;
  padding: 0.25rem 0.5rem;
  border-radius: 1.125rem;
  margin-right: 1rem;
`
