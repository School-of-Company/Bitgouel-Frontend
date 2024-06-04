import { UserSearchFilter } from '@/PageContainer/Admin/UserListPage/style'
import styled from '@emotion/styled'

type SelectBoxTypes = 'allNew' | 'approve' | 'reject'

export const DisplayBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 1.25rem;
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.medium};
  gap: 4rem;
  padding: 0 0 1rem 1rem;

  span {
    &:first-of-type {
      width: 6rem;
    }
    &:nth-of-type(2) {
      width: 8rem;
    }
    &:nth-of-type(3) {
      width: 9rem;
    }
  }
`

export const RequestDisplayBar = styled(DisplayBar)`
  padding-bottom: 0;

  div {
    display: flex;
    align-items: center;
    gap: 1.1875rem;

    span {
      &:first-of-type {
        width: 1.5625rem;
      }
      &:last-of-type {
        width: 6rem;
      }
    }
  }

  span {
    &:first-of-type {
      width: 8rem;
    }

    &:nth-of-type(2) {
      width: 9rem;
    }
  }
`

export const WithdrawTopContainer = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
`

export const NewTopContainer = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1rem;
`

export const SelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const SelectBox = styled.label<{ type: SelectBoxTypes }>`
  width: 7.75rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  background: none;
  ${({ theme }) => theme.typo.text_md.medium};
  border: 0.0625rem solid
    ${({ theme, type }) =>
      type === 'allNew'
        ? theme.color.gray['400']
        : type === 'approve'
        ? theme.color.main
        : theme.color.error};
  color: ${({ theme, type }) =>
    type === 'allNew'
      ? theme.color.gray['400']
      : type === 'approve'
      ? theme.color.main
      : theme.color.error};

  svg {
    fill: ${({ theme, type }) =>
      type === 'allNew'
        ? theme.color.gray['400']
        : type === 'approve'
        ? theme.color.main
        : theme.color.error};
    margin-right: 0.5rem;
  }
  input {
    display: none;
  }
`

export const WithdrawButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`

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
