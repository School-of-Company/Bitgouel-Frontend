import styled from '@emotion/styled'

export const SlideBg = styled.div<{ url: any }>`
  height: 50rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

export const GwangjuBox = styled.div`
  background-color: #e8340c;
  margin-right: 1.5rem;
  padding: 0.75rem 1rem;
  img {
    width: 3rem;
    height: auto;
  }
`

export const BoxText = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_sm}
  margin-left: 12px;
`

export const OfficeBox = styled.div`
  background-color: #2270c1;
  padding: 0.75rem 1.25rem;
  img {
    width: 2.5rem;
    height: auto;
  }
`
