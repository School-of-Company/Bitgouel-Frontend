import styled from '@emotion/styled'

export const ScrollBox = styled.div`
  width: 100%;
`

export const UserItem = styled.div`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  box-sizing: border-box;
  position: relative;
  gap: 4rem;
`

export const Name = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_lg.medium}
  width: 6rem;
`

export const Email = styled.span`
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_lg.medium};
`

export const Role = styled(Email)`
  width: 8rem;
`

export const PhoneNumber = styled(Email)`
  width: 9rem;
`
