import styled from '@emotion/styled'

export const ClubListBanner = styled.span<{ url: any }>`
  margin-top: 2.5rem;
  width: 100vw;
  height: 37rem;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  display: flex;
  justify-content: center;
`

export const ClubListContents = styled.div`
  margin-top: 2.5rem;
  width: 75rem;
`

export const ClubValueTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_md.semibold};
`

export const ClubMainTextArea = styled.div`
  margin: 2.5rem;
  display: flex;
  height: 26.25rem;
`

export const ClubLeftTextArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15.125rem;
`

export const ClubLeftText = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg.semibold};
  height: 2.25rem;
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`

export const ClubRightTextArea = styled.div`
  width: 100%;
`

export const ClubRightTextLine = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
`

export const ClubRightText = styled.div`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_sm.medium};
  height: 2.125rem;
  display: flex;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.white};
  border-radius: 2rem;
  padding: 0 1rem;
  width: fit-content;
  margin-right: 1rem;
`
