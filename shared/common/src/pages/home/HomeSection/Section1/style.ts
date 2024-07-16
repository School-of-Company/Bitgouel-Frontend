import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

export const SlideBg = styled.div<{ url: StaticImageData }>`
  height: 50rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${({ url }) => url.src});
  background-size: cover;
  justify-content: center;
  transition: all 0.5s;
`

export const BgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
`

export const HomeTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
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
  ${({ theme }) => theme.typo.caption.regular}
  animation: ani 0.9s infinite alternate;
  @keyframes ani {
    0% {
      transform: translate(0, -0.25rem);
    }
    100% {
      transform: translate(0, 0.25rem);
    }
  }
  svg {
    transform: rotate(90deg);
    margin-bottom: 0.5rem;
  }
`