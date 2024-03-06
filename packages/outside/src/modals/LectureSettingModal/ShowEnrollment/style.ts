import styled from "@emotion/styled"

export const ShowEnrollmentTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const ShowEnrollmentTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ShowEnrollmentTimeTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.black};
  span {
    &:first-of-type {
      ${({ theme }) => theme.typo.text_lg.medium};
    }
    &:last-of-type {
      ${({ theme }) => theme.typo.text_lg.regular};
    }
  }
`

export const TimeMarkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const TimeMarkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 5.125rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.main};
  border-radius: 0.75rem;
  gap: 0.25rem;

  span {
    ${({ theme }) => theme.typo.text_lg.medium};
  }
  svg {
    cursor: pointer;
  }
`