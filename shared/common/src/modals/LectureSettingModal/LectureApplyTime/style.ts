import styled from '@emotion/styled'

export const LectureApplyTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const DateBox = styled.div`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.black};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
  border-radius: 0.5rem;
  padding: 1.0625rem 1.25rem;

  &::placeholder {
    ${({ theme }) => theme.typo.text_sm.regular};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`
