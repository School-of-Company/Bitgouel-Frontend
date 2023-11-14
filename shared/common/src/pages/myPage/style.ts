import styled from '@emotion/styled'

export const MyPageWrapper = styled.div<{ url: any }>`
  background-image: url(${({ url }) => url.src});
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`

export const BlackBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  margin-top: 7.375rem;
  width: 39.75rem;
  height: 57.5rem;
  background-color: ${({ theme }) => theme.color.gray[200]};
  border-radius: 0.5rem;
`

export const WhiteBox = styled.div`
  width: 36.75rem;
  height: 52.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
`

export const MyIdentify = styled.div`
  margin: 2.5rem 1.5rem;
`

export const ProfileContainer = styled.div``

export const Name = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_lg};
  margin-right: 0.8rem;
`

export const Role = styled.span`
  color: ${({ theme }) => theme.color.gray[700]};
  ${({ theme }) => theme.typo.title_sm}
`

export const SchoolName = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_lg}
  margin-top: 0.25rem;
  margin-right: 0.8rem;
`

export const SubEnter = styled.span`
  color: ${({ theme }) => theme.color.gray[700]};
  ${({ theme }) => theme.typo.text_lg};
`

export const AccountWrapper = styled.div`
  margin: 2.5rem 0;
`

export const MyTitle = styled.span`
  ${({ theme }) => theme.typo.title_sm};
`

export const AccountContainer = styled.div`
  margin-top: 1rem;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
`

export const LeftText = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_md};
`

export const RightText = styled.span`
  color: ${({ theme }) => theme.color.gray[700]};
  ${({ theme }) => theme.typo.text_md};
`

export const SharedLine = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${({ theme }) => theme.color.gray[900]};
`

export const AccountSettingWrapper = styled.div`
  margin-top: 5rem;
`

export const AccountSettingContainer = styled.div`
  margin-top: 2.5rem;
  div {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0rem;
  }
`

export const ModifyText = styled.span`
  color: ${({ theme }) => theme.color.main};
  text-decoration: underline;
  cursor: pointer;
`

export const WithDrow = styled.span`
  color: ${({ theme }) => theme.color.error};
  text-decoration: underline;
  cursor: pointer;
`
