import styled from '@emotion/styled'

export const EmailInputContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 11rem;
`

export const EmailValue = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`

export const Title = styled.span`
  ${({ theme }) => theme.typo.title_sm.semibold};
`
