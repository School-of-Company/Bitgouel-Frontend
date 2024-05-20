import styled from '@emotion/styled'

export const ClubListItemBox = styled.div`
  width: 16.875rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 0.0625rem solid ${({theme}) => theme.color.gray['900']};
  border-radius: 0.5rem;
  background: none;
  padding: 1rem 0 0 1rem;
  gap: 0.6rem;
`

export const ClubName = styled.h1`
  ${({ theme }) => theme.typo.title_sm.semibold};
  color: ${({ theme }) => theme.color.black};
  margin: 0;
`

export const InClubArrowButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;

  span {
    ${({ theme }) => theme.typo.text_md.regular};
    color: ${({ theme }) => theme.color.gray['700']};
  }
`
