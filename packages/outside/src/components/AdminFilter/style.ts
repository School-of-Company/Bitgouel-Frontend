import styled from '@emotion/styled'

export const JobFilterWrapper = styled.div`
  width: 11.375rem;
  height: 22.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(129, 129, 129, 0.6);
  opacity: 1;
  z-index: 99;
  border-radius: 0.5rem;
  position: absolute;
  top: 22%;

  h3 {
    color: ${({theme}) => theme.color.white};
    ${({theme}) => theme.typo.text_lg.semibold};
    margin: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: -5.5%;
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
  gap: 1rem;
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
