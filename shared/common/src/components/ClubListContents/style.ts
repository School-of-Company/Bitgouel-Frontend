import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

export const ClubListBanner = styled.span<{ url: StaticImageData }>`
  margin-top: 2.5rem;
  width: 100vw;
  height: 42.5rem;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  flex-wrap: wrap;
  align-content: space-between;
  width: 15.125rem;
`

export const ClubLeftText = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg.semibold};
  height: 2.25rem;
  width: 15.125rem;
  display: flex;
  align-items: center;
`

export const ClubRightTextArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`

export const ClubRightTextLine = styled.div`
  display: flex;
  width: 100%;
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
