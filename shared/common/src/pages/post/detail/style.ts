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

export const CreateTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  bottom: 1.6rem;
  position: fixed;

  div {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_lg.semibold};
    border-radius: 0.5rem;
    cursor: pointer;
    width: 11.25rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const DeletePostButton = styled.div`
  background-color: ${({ theme }) => theme.color.error};
  margin-right: 1rem;
`

export const ModifyPostButton = styled.div`
  background-color: ${({ theme }) => theme.color.main};
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

export const Title = styled.span`
  ${({ theme }) => theme.typo.title_md.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const SubTitle = styled.div`
  padding: 0.5rem 0;
  display: flex;
  span {
    ${({ theme }) => theme.typo.text_md.regular};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const ApproveStatus = styled.div<{ approveColor: boolean }>`
  background-color: ${({ theme, approveColor }) =>
    approveColor ? theme.color.blue['800'] : theme.color.red['800']};
  color: ${({ theme, approveColor }) =>
    approveColor ? theme.color.main : theme.color.error};
  ${({ theme }) => theme.typo.text_md.regular};
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 1.125rem;
  margin-right: 2.5rem;
`

export const NumberBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
`

export const SubTitleBox = styled.div`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray['700']};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`

export const MainText = styled.div`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.regular};
  line-height: 1.5rem;
  margin-top: 2.25rem;
`

export const SharedLine = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.color.gray['900']};
  margin: 2.5rem 0;
`

export const LinkTextBox = styled.div`
  width: 100%;
`

export const LinkTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.semibold};
`

export const LinkWrapper = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  a {
    color: ${({ theme }) => theme.color.gray['700']};
    ${({ theme }) => theme.typo.text_md.medium};
  }
`