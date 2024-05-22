import styled from '@emotion/styled'

export const LectureEnrollmentDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
`

export const EnrollmentDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
  svg {
    cursor: pointer;
  }
  div {
    width: 7.625rem;
  }
  div:first-child {
    width: 21.5rem;
  }
`

export const RemoveButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const AddDateButton = styled.div`
  width: 100%;
  ${({ theme }) => theme.typo.text_lg.regular};
  color: ${({ theme }) => theme.color.gray['700']};
  padding: 1rem 0 1rem 1rem;
  cursor: pointer;
`
