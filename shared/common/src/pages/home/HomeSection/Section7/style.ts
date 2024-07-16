import styled from '@emotion/styled'
import { IntersectionObserver } from '../animations'

export const AgencyIntroContainer = styled.div`
  margin: 10rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${IntersectionObserver}
`

export const AgencyIntroList = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
  width: 35rem;
  &:last-child {
    width: 55rem;
    margin-top: 8.125rem;
  }
`

export const AgencyIntroItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`

export const AgencyValueName = styled.div<{ color: string }>`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg.semibold};
  position: absolute;
  margin-top: -3.125rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 6.25rem;
  height: 6.25rem;
  background-color: ${({ theme, color }) => theme.color.blue[color]};
`

export const AgencyNameBox = styled.div`
  width: 15rem;
  height: 9.375rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`

export const AgencyName = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_md.regular};
  margin-top: 0.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`
