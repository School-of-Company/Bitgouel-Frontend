import styled from '@emotion/styled'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  svg {
    cursor: pointer;
  }
`

export const SearchBox = styled.form`
  width: calc(100% - 9.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
  border-radius: 0.5rem;
  padding: 1.0625rem 1.25rem;
`

export const Filter = styled.div`
  width: 5.75rem;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_md.medium};

  &:hover {
    border: 0.0625rem solid ${({ theme }) => theme.color.main};
    fill: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.main};
  }
`

export const SearchInput = styled.input`
  width: 100%;
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.black};
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['400']};
  }
`
