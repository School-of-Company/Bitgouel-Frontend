import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

export const SlideBg = styled.div<{ url: StaticImageData }>`
  width: 100%;
  height: 50rem;
  background-image: url(${({ url }) => url.src});
  background-size: cover;
  background-position: center;
  transition: all 0.5s;
`

export const SlideCover = styled.div`
  width: 100%;
  height: 50rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
`
