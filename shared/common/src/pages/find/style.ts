import styled from '@emotion/styled'

export const ChangePWTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const TitleItemWrapper = styled.div`
  padding: 1.5rem 0 0 1.5rem;
  display: flex;
  flex-direction: column;
`

export const TitleItem = styled.span`
  ${({ theme }) => theme.typo.title_sm.semibold};
  letter-spacing: -0.125rem;
`

export const SubTitleItem = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
