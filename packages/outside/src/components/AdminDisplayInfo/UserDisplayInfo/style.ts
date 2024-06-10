import styled from '@emotion/styled'

export const DisplayBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 1.25rem;
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.medium};
  gap: 4rem;
  padding: 0 0 1rem 1rem;

  span {
    &:first-of-type {
      width: 6rem;
    }
    &:nth-of-type(2) {
      width: 8rem;
    }
    &:nth-of-type(3) {
      width: 9rem;
    }
  }
`

export const RequestDisplayBar = styled(DisplayBar)`
  padding-bottom: 0;

  div {
    display: flex;
    align-items: center;
    gap: 1.1875rem;

    span {
      &:first-of-type {
        width: 1.5625rem;
      }
      &:last-of-type {
        width: 6rem;
      }
    }
  }

  span {
    &:first-of-type {
      width: 8rem;
    }

    &:nth-of-type(2) {
      width: 9rem;
    }
  }
`
