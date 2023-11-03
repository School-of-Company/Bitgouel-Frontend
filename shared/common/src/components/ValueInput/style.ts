import styled from '@emotion/styled'

export const ValueWrapper = styled.div`
  width: 24rem;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const ValueInput = styled.input`
  width: 100%;
  height: 3.2rem;

  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  border-radius: 0.5rem;
  outline: none;
  text-indent: 1.25rem;

  ${({ theme }) => theme.typo.text_sm};

  &:focus {
    border: 0.0625rem solid ${({ theme }) => theme.color.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['400']};
    ${({ theme }) => theme.typo.text_sm};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const XIconWrapper = styled.div`
  position: absolute;
  margin-right: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`
