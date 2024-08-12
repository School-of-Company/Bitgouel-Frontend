import styled from '@emotion/styled'

export const ApplyDetailModalWrapper = styled.div`
  width: 37.5rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
`

export const Title = styled.h1`
  ${({ theme }) => theme.typo.title_sm.semibold};
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ContentLeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`

export const ContentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContentRightWrapper = styled(ContentLeftWrapper)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  border-left: 1px solid ${({ theme }) => theme.color.gray['900']};
  height: 17.5rem;
  padding: 0 1rem 0 1rem;
`

export const ContentCaption = styled.span`
  ${({ theme }) => theme.typo.caption.semibold};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const ContentName = styled.span`
  ${({ theme }) => theme.typo.text_md.semibold};
`

export const CompleteTextBox = styled.div`
  display: flex;
  align-items: flex-end;
`

export const CompleteText = styled.span<{ isComplete: boolean }>`
  ${({ theme }) => theme.typo.text_md.semibold};
  color: ${({ theme, isComplete }) =>
    isComplete ? theme.color.main : theme.color.gray['700']};
`

export const CompleteDateText = styled.span`
  ${({ theme }) => theme.typo.caption.medium};
  margin-left: 0.5rem;
`