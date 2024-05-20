import styled from '@emotion/styled'

export const ClubSchoolTitle = styled.div`
  ${({ theme }) => theme.typo.title_sm.semibold};
`

export const ClubListWrapper = styled.div`
  grid-template-columns: repeat(4, 1fr);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`
