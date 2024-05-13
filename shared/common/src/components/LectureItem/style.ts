import styled from '@emotion/styled'

export const LectureItemWrapper = styled.div`
  padding: 0.5rem 0;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  cursor: pointer;
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const MainTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.semibold};
`

export const Professor = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.regular};
  margin-left: 0.5rem;
`

export const TypeText = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.color.gray['900']};
  gap: 0.5rem;
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.caption.regular};
  &:last-child {
    margin-left: 0.5rem;
  }
`

export const MainText = styled.div`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm};
  margin: 0.5rem 0;
  height: 2.5rem;
`

export const LectureMenu = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.caption.regular};
  margin-left: 1rem;
`

export const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  div {
    display: flex;
  }
`
