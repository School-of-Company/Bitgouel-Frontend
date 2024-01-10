import styled from '@emotion/styled'

export const MyPageWrapper = styled.div<{ url: any }>`
  background-image: url(${({ url }) => url.src});
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`

export const BlackBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  width: 39.75rem;
  margin-top: 6rem;
  background-color: ${({ theme }) => theme.color.gray['200']};
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 1.5rem 1.5rem 0 1.5rem;
`

export const WhiteBox = styled.div`
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${({ theme }) => theme.color.white};
`

export const ClipContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Clip = styled.div`
  background: radial-gradient(
    at -5rem -1rem,
    ${({ theme }) => theme.color.white} 5rem,
    ${({ theme }) => theme.color.gray['800']} 20rem
  );
  box-shadow: inset 0 -0.032rem 0.032rem 0 rgba(0, 0, 0, 0.25);
  width: 11.75rem;
  height: 3.2rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 6.75rem;
`

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
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0rem;
  }
`

export const ModifyText = styled.span`
  color: ${({ theme }) => theme.color.main};
  text-decoration: underline;
  cursor: pointer;
`

export const WithDrawText = styled.span`
  color: ${({ theme }) => theme.color.error};
  text-decoration: underline;
  cursor: pointer;
`
