import styled from '@emotion/styled'

export const AuthTitleMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const TitleItemContainer = styled.div`
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

export const ShowCurrentPageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-right: 1.8rem;
`

export const CurrentPage = styled.div<{ current: number; page: number }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ current, page, theme }) =>
    current === page ? theme.color.main : theme.color.gray['700']};
`
