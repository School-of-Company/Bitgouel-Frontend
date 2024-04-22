import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

export const SlideBg = styled.div<{ url: StaticImageData }>`
  height: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  align-items: flex-end;
`

export const BgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
`

export const LectureTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 1rem;
`
export const ListContainer = styled.div`
  width: 75rem;
  margin-top: 2.25rem;
`

export const ApplyInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
  justify-content: space-between;

  span {
    ${({ theme }) => theme.typo.text_sm.medium};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`
