import styled from '@emotion/styled'

export const SlideBg = styled.div<{ url: any }>`
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
  margin-bottom: 1rem;
`

export const LectureTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg};
`

export const DocumentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Document = styled.div`
  width: 75rem;
`

export const TitleContainer = styled.div`
  margin-top: 2rem;
`

export const SubTitle = styled.div`
  padding: 0.5rem 0;
  span {
    ${({ theme }) => theme.typo.text_md};
  }
`

export const Professor = styled.span`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.color.black};
`

export const Date = styled.span`
  color: ${({ theme }) => theme.color.gray[700]};
`

export const Title = styled.span`
  ${({ theme }) => theme.typo.title_sm};
  color: ${({ theme }) => theme.color.black};
`

export const SubMenuContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
`

export const From = styled.div`
  ${({ theme }) => theme.typo.text_sm};
  color: ${({ theme }) => theme.color.gray[400]};
  background-color: ${({ theme }) => theme.color.gray[900]};
  padding: 0.25rem 0.5rem;
  border-radius: 1.125rem;
`

export const MenuNum = styled.div`
  display: flex;
  margin-left: 1rem;
  ${({ theme }) => theme.typo.text_sm};
  color: ${({ theme }) => theme.color.gray[700]};
  align-items: center;
  div {
    margin-right: 1rem;
  }
`

export const MainText = styled.div`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_sm};
  line-height: 1.5rem;
  margin-top: 2.25rem;
  padding-bottom: 6.25rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const EnrolmentButton = styled.div`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg};
  cursor: pointer;
  bottom: 1.5625rem;
  position: fixed;
  padding: 0.8438rem 2.5625rem;
  border-radius: 0.5rem;
`
