import styled from '@emotion/styled'

export const ClubName = styled.span`
  margin-top: 1.5rem;
  ${({ theme }) => theme.typo.title_md.semibold}
`

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1rem;
`

export const ClubInfoBox = styled.div`
  ${({ theme }) => theme.typo.text_md.regular}
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    background-color: ${({ theme }) => theme.color.gray['700']};
    color: ${({ theme }) => theme.color.white};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  span {
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const StudentListWrapper = styled.div`
  h2 {
    ${({ theme }) => theme.typo.title_sm.semibold}
  }
`

export const StudentItem = styled.div<{ isStudent: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  cursor: ${({ isStudent }) => (isStudent ? 'auto' : 'pointer')};

  span:first-child {
    color: ${({ theme }) => theme.color.black};
    ${({ theme }) => theme.typo.text_lg.medium}
  }

  span:last-child {
    color: ${({ theme }) => theme.color.gray['400']};
    ${({ theme }) => theme.typo.text_md.regular}
    margin-right: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme, isStudent }) =>
      isStudent ? 'none' : theme.color.gray['900']};
  }

  &:last-child {
    border: none;
  }
`
