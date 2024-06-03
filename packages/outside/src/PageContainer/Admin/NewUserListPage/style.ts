import styled from '@emotion/styled'
import { DisplayBar } from '../UserListPage/style'

type SelectBoxTypes = 'allNew' | 'approve' | 'reject'

export const TopContainer = styled.div`
  margin-top: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1rem;
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

export const AloneCheckBox = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.color.main};

  cursor: pointer;
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.text_md.medium};
  margin-right: 0.625rem;
`

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75rem;
  height: 32.625rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`
