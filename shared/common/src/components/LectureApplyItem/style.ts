import styled from '@emotion/styled'

export const ApplyItemWrapper = styled.div`
  width: 100%;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};

  input {
    margin: 0;
  }
`

export const ApplyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    ${({ theme }) => theme.typo.text_lg.semibold};
  }
`

export const CohortText = styled.span`
  color: ${({ theme }) => theme.color.gray['700']};
  display: flex;
  flex-wrap: wrap;
`

export const NameText = styled.span`
  color: ${({ theme }) => theme.color.black};
`

export const SchoolInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  span {
    ${({ theme }) => theme.typo.text_lg.medium};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  span {
    ${({ theme }) => theme.typo.text_lg.regular};
    color: ${({ theme }) => theme.color.gray['700']};

    &:first-of-type {
      width: 9rem;
    }
  }
`
