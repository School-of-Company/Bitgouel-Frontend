import styled from '@emotion/styled'

export const NewUserItem = styled.div`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  div {
    width: 6.5rem;
  }
`

export const CheckBox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 1rem;
  margin-right: 1.75rem;
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
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
