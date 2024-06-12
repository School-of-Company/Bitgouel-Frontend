import styled from '@emotion/styled'

export const MyIdentify = styled.div`
  margin: 2.5rem 1.5rem;
`

export const MyIdentifyWrapper = styled.div`
  div {
    margin-top: 0.125rem;
  }
`

export const Name = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_lg.semibold};
  margin-right: 0.8rem;
`

export const Role = styled.span`
  color: ${({ theme }) => theme.color.gray['700']};
  ${({ theme }) => theme.typo.title_sm.semibold}
`

export const OrganizationName = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.semibold}
  margin-top: 0.25rem;
  margin-right: 0.8rem;
`

export const SubEnter = styled.span`
  color: ${({ theme }) => theme.color.gray['700']};
  ${({ theme }) => theme.typo.text_lg.semibold};
`

export const SubId = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_md.regular};
`

export const AccountWrapper = styled.div`
  margin: 4rem 0;
`

export const MyTitle = styled.span`
  ${({ theme }) => theme.typo.title_sm.semibold};
`

export const AccountContainer = styled.div`
  margin-top: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    align-items: center;
  }
`

export const LeftText = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_md.regular};
`

export const RightText = styled.span`
  color: ${({ theme }) => theme.color.gray['700']};
  ${({ theme }) => theme.typo.text_md.regular};
`

export const SharedLine = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.color.gray['900']};
`

export const AccountSettingWrapper = styled.div`
  margin-top: 4rem;
`

export const AccountSettingContainer = styled.div`
  margin-top: 2rem;
`

export const AccountSettingLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0rem;
`

export const LineRightText = styled.label`
  ${({ theme }) => theme.typo.text_md.regular};
  color: ${({ theme }) => theme.color.main};
  text-decoration: underline;
  cursor: pointer;

  input {
    display: none;
  }
`

export const WithDrawText = styled(LineRightText)`
  color: ${({ theme }) => theme.color.error};
`
