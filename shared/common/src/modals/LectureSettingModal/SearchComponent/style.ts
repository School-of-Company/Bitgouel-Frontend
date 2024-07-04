import styled from '@emotion/styled'

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  input {
    margin: 0;
  }
`

export const SearchInputBox = styled.form<{ isSelected?: boolean }>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.gray['900'] : theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  border-radius: 0.5rem;
  padding: 1.0625rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 2.5rem);

  svg {
    cursor: pointer;
  }
`

export const SearchInput = styled.input<{ length?: number }>`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ length, theme }) =>
    length === 0 ? theme.color.white : theme.color.gray['900']};
  border: none;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const SearchListContainer = styled.div<{ type: string }>`
  width: 100%;
  /* height: 15rem; */
  height: ${({ type }) => (type === '계열' ? '15rem' : '11rem')};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: ${({ type }) => (type === '계열' ? 'none' : 'scroll')}; */
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const SearchItem = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  transition: all 0.1s ease-in;

  span {
    &:first-of-type {
      ${({ theme }) => theme.typo.text_lg.regular};
      color: ${({ theme }) => theme.color.black};
    }
  }

  small {
    ${({ theme }) => theme.typo.text_md.regular};
    color: ${({ theme }) => theme.color.gray['400']};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.gray['900']};
  }
`
