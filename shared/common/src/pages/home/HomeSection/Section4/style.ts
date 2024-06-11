import styled from '@emotion/styled'

export const ClubListContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ClubIntroList = styled.div`
  margin-top: 5rem;
`

export const ClubIntroListWrapper = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  &:last-child {
    margin-top: 4rem;
  }
`

export const ClubIntro = styled.div`
  width: 24rem;
`

export const ClubIntroSubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
`

export const ClubIntroTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_md.medium};
`

export const ClubIntroSubTitle = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_sm.regular};
`

export const ClubIntroText = styled.div`
  margin: 1rem 1.5rem 0rem;
  width: 100%;

  li {
    color: ${({ theme }) => theme.color.gray['700']};
    ${({ theme }) => theme.typo.text_sm.regular};
  }
`

export const ClubListWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ClubListTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_md.semibold};
`
