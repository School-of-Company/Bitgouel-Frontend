import { css, keyframes } from '@emotion/react'

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const IntersectionObserver = css`
  &.fade-in {
    animation: ${fadeIn} 0.8s ease-in-out;
  }
  &.hidden {
    opacity: 0;
    animation: ${fadeOut} 0.8s ease-in-out;
  }
`
