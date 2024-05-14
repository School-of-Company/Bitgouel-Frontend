import styled from '@emotion/styled'

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3.75rem;
`

export const ClubSchoolTitle = styled.div`
  ${({ theme }) => theme.typo.title_sm.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const ClubListWrapper = styled.div`
  grid-template-columns: repeat(4, 1fr);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`
