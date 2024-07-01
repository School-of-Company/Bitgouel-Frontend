import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { IntersectionObserver } from '../animations'

const scrollingLeftFirst = keyframes`
  0% {left: 0%;}
  100% {left: -2110px;}
`

const scrollingLeftSecond = keyframes`
  0% {left: 2110px;}
  100% {left: 0%;}
`

const scrollingRightFirst = keyframes`
  0% {right: 2465px;}

  100% {right: 0%;}
`

const scrollingRightSecond = keyframes`
  0% {right: 0%;}

  100% {right: -2465px;}
`

export const SchoolListContainer = styled.div`
  margin-top: 7.5rem;
  ${IntersectionObserver}
`

export const SchoolIntroWrapper = styled.div`
  width: 100vw;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 6rem;
`

export const SchoolIntroListContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 15rem;
`

const SchoolIntroListExample = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  gap: 2.5rem;
`

export const SchoolIntroListLeftFirst = styled(SchoolIntroListExample)`
  left: 0;
  height: inherit;
  animation: ${scrollingLeftFirst} 22s linear 0s infinite normal none running;
`

export const SchoolIntroListLeftSecond = styled(SchoolIntroListExample)`
  left: 0;
  height: inherit;
  animation: ${scrollingLeftSecond} 22s linear 0s infinite normal none running;
`

export const SchoolIntroListRightFirst = styled(SchoolIntroListExample)`
  animation: ${scrollingRightFirst} 22s linear 0s infinite normal none running;
`

export const SchoolIntroListRightSecond = styled(SchoolIntroListExample)`
  animation: ${scrollingRightSecond} 22s linear 0s infinite normal none running;
`
