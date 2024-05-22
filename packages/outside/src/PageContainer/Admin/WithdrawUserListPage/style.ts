import styled from '@emotion/styled'
import { UserSearchFilter, UserSearchFilterBox } from '../UserListPage/style'

export const TopContainer = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
`

export const RemarkBox = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.text_sm.medium};
  color: ${({ theme }) => theme.color.gray['400']};

  span {
    margin-left: 1rem;
  }
`

export const WithdrawButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`

export const FilterContainer = styled(UserSearchFilterBox)``
export const FilterBox = styled(UserSearchFilter)`
  height: 2.5rem;
`

export const SelectWithdrawBox = styled.div`
  width: 7.75rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.error};
  border: 0.0625rem solid ${({ theme }) => theme.color.error};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_md.medium};

  svg {
    margin-right: 0.5rem;
    fill: ${({ theme }) => theme.color.white};
  }
`

export const AllWithdrawBox = styled.label`
  width: 7.75rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.color.error};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.text_md.medium};

  svg {
    margin-right: 0.5rem;
    fill: ${({ theme }) => theme.color.error};
  }
  input {
    display: none;
  }
`
