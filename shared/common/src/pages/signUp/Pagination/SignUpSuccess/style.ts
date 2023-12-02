import { LoginWrapper } from '../../../login/style'
import styled from '@emotion/styled'

export const SignUpSuccessWrapper = styled(LoginWrapper)``

export const TitleWrapper = styled.div`
  width: 100%;
  height: 9.5625rem;
`
export const TitleItemWrapper = styled.div`
  padding: 1.5rem 0 0 1.5rem;
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  width: 13.5rem;
  height: 11.0625rem;
`

export const TitleItem = styled.span`
  ${({ theme }) => theme.typo.title_md.semibold};
`

export const SignUpWrapper = styled.div`
  width: 100%;
  height: 20.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignUpContainer = styled.div`
  width: 10.625rem;
  height: 3.1875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.375rem;
`

export const MainTitle = styled.span`
  ${({ theme }) => theme.typo.title_sm.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const ViceTitle = styled.div`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const BackButtonContainer = styled.div`
  width: 100%;
  height: 4.625rem;
  display: flex;
  justify-content: center;
`

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg.semibold};
  width: 24rem;
  height: 3.25rem;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
`
