import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

export const ClubWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75rem;
  height: 100%;
  margin-top: 3rem;
  gap: 3.75rem;
`

export const ClubGroupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`

export const ClubSchoolTitle = styled.div`
  ${({ theme }) => theme.typo.title_sm.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const ClubListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`
