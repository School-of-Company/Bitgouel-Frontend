import { theme } from '../../../../styles/theme'
import styled from '@emotion/styled'

export const LoginWrapper = styled.div`
  width: 432px;
  height: 531px;
  border-radius: 8px;
  border: 1px solid #b8b8b8;
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: 177px;
`
export const TitleItemWrapper = styled.div`
  padding: 24px 0 0 24px;
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  width: 216px;
  height: 177px;
`

export const TitleItem = styled.span`
  ${theme.typo.title_md};
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  flex-direction: column;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const PasswordContainer = styled.div`
  width: 88%;
  display: flex;
  gap: 210px;
  margin-top: 4px;
`

export const MenuItem = styled.span`
  ${theme.typo.caption};
  color: ${theme.color.gray['400']};
  cursor: pointer;
`

export const PasswordSearch = styled.span`
  ${theme.typo.caption};
  color: ${theme.color.main};
  cursor: pointer;
`

export const LoginButtonWrapper = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const LoginButton = styled.button`
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  ${theme.typo.text_lg};
  width: 384px;
  height: 52px;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
`

export const JoinWrapper = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`

export const NoAccountItem = styled.span`
  ${theme.typo.text_md};
  color: ${theme.color.black};
`

export const UserJoinItem = styled.span`
  ${theme.typo.text_md};
  color: ${theme.color.main};
  margin-left: 4px;
  cursor: pointer;
`
