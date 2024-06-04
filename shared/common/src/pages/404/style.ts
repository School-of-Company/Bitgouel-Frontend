import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

export const ErrorPageWrapper = styled.div<{ url: StaticImageData }>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${({ url }) => url.src});
  background-size: cover;
  justify-content: center;
  transition: background-image 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25rem;
  flex-wrap: wrap;
  width: 31.375rem;
  justify-content: center;
  align-content: space-between;
`

export const ErrorTextContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  b {
    font-size: 7.5rem;
    line-height: normal;
  }
  span {
    ${({ theme }) => theme.typo.title_md.semibold};
    text-align: center;
  }
  span:last-child {
    ${({ theme }) => theme.typo.title_sm.medium};
    color: ${({ theme }) => theme.color.gray['700']};
  }
`

export const BackButton = styled.div`
  padding: 0.75rem 5.625rem;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  cursor: pointer;
`
