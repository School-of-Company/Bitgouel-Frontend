import styled from '@emotion/styled'

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

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const ListContainer = styled.div`
  width: 100%;
`

export const InquiryFilter = styled.div`
  width: 11.375rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(129, 129, 129, 0.6);
  z-index: 99;
  border-radius: 0.5rem;
  padding-bottom: 1.5rem;
  position: absolute;
  top: 150%;
  gap: 0.5rem;

  h3 {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_lg.semibold};
    margin: 1rem 0 0 1rem;
  }
  input {
    margin: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -13.5%;
    right: 40%;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-bottom: 1.25rem solid rgba(129, 129, 129, 0.6);
  }
`

export const CheckListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-left: 1rem;
`

export const CheckBox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_sm.regular};
  }
`

export const Check = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  background-color: #ffffff40;
  border-radius: 0.5rem;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.color.main};
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

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

export const SearchInput = styled.input`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.black};
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['400']};
  }
`
