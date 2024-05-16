import styled from '@emotion/styled'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  padding: 0.75rem 1rem;
`

export const ItemContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const TitleTypeBox = styled.div`
  margin-right: 1rem;
  min-width: 9.0625rem;
  height: 2.125rem;
  border: 0.125rem solid ${({ theme }) => theme.color.gray['700']};
  border-radius: 6.1875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleType = styled.span`
  ${({ theme }) => theme.typo.text_sm.medium};
  color: ${({ theme }) => theme.color.gray['400']};
  padding: 0.4375rem 0.75rem;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.span`
  ${({ theme }) => theme.typo.text_lg.medium};
  margin-right: 1rem;
`

export const professorName = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const Line = styled.hr`
  position: relative;
  bottom: 0.0625rem;
  height: 1rem;
  width: 0.0625rem;
  border: 0;
  background-color: ${({ theme }) => theme.color.gray['700']};
`

export const Date = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`
