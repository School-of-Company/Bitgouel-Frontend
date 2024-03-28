import styled from '@emotion/styled'

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const FilterBox = styled.div`
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

export const Filter = styled.div`
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
  top: 4.5rem;
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
    top: -1.24rem;
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

export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  

  div {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.main};
    position: absolute;
    left: 0.24rem;
  }

  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_sm.regular};
  }
`

export const CheckBox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  cursor: pointer;
  appearance: none;
  background-color: #ffffff40;

  &:checked {
    background: none;
    border: 0.0625rem solid ${({ theme }) => theme.color.main};
  }
`
