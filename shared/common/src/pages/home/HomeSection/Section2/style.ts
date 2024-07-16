import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { IntersectionObserver } from '../animations'

export const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${IntersectionObserver}
`

export const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`

export const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const SemiTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2.5rem;
`

export const SubTitleSub = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_lg.medium};

  animation: none important;
  opacity: 1 important;
`

export const SubTitleMain = styled.span`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_lg.semibold}
`

export const FromTextContainer = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.title_sm.regular}
  a {
    ${({ theme }) => theme.typo.title_sm.semibold}
    color: #cd2329;
  }
  a:last-child {
    color: #2270c1;
  }
`

export const UnionListContainer = styled.div`
  margin-top: 5rem;
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
    ${({ theme }) => theme.typo.text_lg.medium}
    color: ${({ theme }) => theme.color.gray['400']};
  }
  div {
    margin-top: 2rem;
    margin-left: 1rem;
  }
`

export const UnionTitle = styled.span`
  ${({ theme }) => theme.typo.title_sm.semibold}
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
  background: linear-gradient(-45deg, #288be1, #45dfda);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  div {
    ${({ theme }) => theme.typo.title_sm.semibold}
    color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    line-height: 2rem;
  }
`
