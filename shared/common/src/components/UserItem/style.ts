import styled from '@emotion/styled'

export const UserItem = styled.div`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  div {
    margin: 0 1rem;
  }
`

export const Name = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.medium}
  margin-right: 0.5rem;
`

export const Role = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.medium}
`
