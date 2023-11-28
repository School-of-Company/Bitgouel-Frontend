import styled from '@emotion/styled'

export const HomeWrapper = styled.div`
  background-color: #f6f6f6;
`

export const SlideBg = styled.div<{ url: any }>`
  height: 50rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-image: url(${({ url }) => url.src});
  background-size: cover;
  justify-content: center;
  transition: all 0.5s;
`

export const BgContainer = styled.div`
  width: 75rem;
`

export const HomeTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg};
`

export const ViewContainer = styled.div`
  width: 100%;
  position: absolute;
  top: calc(50rem - 4rem);
`

export const View = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    transform: rotate(90deg);
    margin-bottom: 0.5rem;
    ${({ theme }) => theme.typo.text_sm};
  }
`

export const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`

export const SubTitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 31.25rem;
`

export const SubTitleSub = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_lg}
`

export const SubTitleMain = styled.span`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_lg}
`

export const FromLogoContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3.125rem;
  }
`

export const BoxText = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_sm}
  margin-left: 12px;
`

export const GwangjuBox = styled.div`
  background-color: #e8340c;
  margin-right: 1.5rem;
  padding: 0.75rem 1rem;
  img {
    width: 3rem;
    height: auto;
  }
`

export const OfficeBox = styled.div`
  background-color: #2270c1;
  padding: 0.75rem 1.25rem;
  img {
    width: 2.5rem;
    height: auto;
  }
`

export const UnionListContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const UnionListWrapper = styled.div`
  display: flex;
  width: 75rem;
  justify-content: space-between;
`

export const UnionItem = styled.div`
  width: 17.625rem;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  li {
    ${({ theme }) => theme.typo.text_lg}
    color: ${({ theme }) => theme.color.gray['400']};
  }
  div {
    margin-top: 2rem;
    margin-left: 1rem;
  }
`

export const UnionTitle = styled.span`
  ${({ theme }) => theme.typo.title_sm}
  color: ${({ theme }) => theme.color.black};
  margin-left: 1rem;
`

export const BannerTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12rem;
  margin-top: 7.5rem;
  background: linear-gradient(to right, #288be1, #45dfda);
  div {
    ${({ theme }) => theme.typo.title_sm}
    color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`

export const SchoolListContainer = styled.div`
  margin-top: 7.5rem;
`

export const SemiTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2.5rem;
`

export const SchoolItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  width: 100%;
`

export const ClubListContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ClubIntroListWrapper = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  &:last-child {
    margin-top: 4rem;
  }
`

export const ClubIntroList = styled.div`
  margin-top: 5rem;
`

export const ClubIntro = styled.div`
  width: 24rem;
`

export const ClubIntroSubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`

export const ClubIntroTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_md};
`

export const ClubIntroSubTitle = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_md};
`

export const ClubIntroText = styled.div`
  margin: 1rem 1.5rem 0rem;
  li {
    color: ${({ theme }) => theme.color.gray['700']};
    ${({ theme }) => theme.typo.text_sm};
  }
`

export const ClubListWrapper = styled.div`
  margin-top: 10rem;
`

export const ClubListTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_md};
`

export const ClubListBanner = styled.span<{ url: any }>`
  margin-top: 2.5rem;
  width: 100%;
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
  ${({ theme }) => theme.typo.title_md};
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
  ${({ theme }) => theme.typo.text_lg};
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
  ${({ theme }) => theme.typo.text_sm};
  height: 2.125rem;
  display: flex;
  align-items: center;
  border: 0.0625rem solid ${({ theme }) => theme.color.white};
  border-radius: 2rem;
  padding: 0 1rem;
  width: fit-content;
  margin-right: 1rem;
`

export const UnionUniversityContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const UnionUniversityList = styled.div`
  width: 66.625rem;
  height: 32.5rem;
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
`

export const UniversityLeftArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-align: end;
  div {
    margin-top: 6.25rem;
  }
`

export const UniversityRightArea = styled.div`
  div {
    margin-bottom: 6.25rem;
  }
`

export const UniversityIntro = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const UniversityName = styled.span`
  color: ${({ theme }) => theme.color.blue['300']};
  ${({ theme }) => theme.typo.title_sm};
`

export const UniversityText = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg};
  margin-top: 0.75rem;
`
