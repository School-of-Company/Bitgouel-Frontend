import styled from '@emotion/styled'

export const LectureEnrollmentDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

export const EnrollmentDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    cursor: pointer;
  }
`

export const AddDateButton = styled.div`
  width: 100%;
  ${({ theme }) => theme.typo.text_lg.regular};
  color: ${({ theme }) => theme.color.gray['700']};
  padding: 1rem 0 1rem 1rem;
  cursor: pointer;
`
