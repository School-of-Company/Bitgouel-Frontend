import styled from '@emotion/styled'

export const UnionUniversityContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const UnionUniversityList = styled.div`
  display: flex;
  height: 32.5rem;
  margin-top: 5rem;
  justify-content: space-between;
`

export const UniversityLeftArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-align: end;
  div {
    margin-top: 6.25rem;
  }
`

export const UniversityRightArea = styled.div`
  div {
    margin-bottom: 6.25rem;
  }
`

export const UniversityIntro = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const WhiteSpace = styled.div`
  width: 5rem;
`

export const UniversityName = styled.span`
  color: ${({ theme }) => theme.color.blue['300']};
  ${({ theme }) => theme.typo.title_sm.semibold};
`

export const UniversityText = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.semibold};
  margin-top: 0.75rem;
`
