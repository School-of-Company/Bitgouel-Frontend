import styled from '@emotion/styled'

export const ValueWrapper = styled.div`
  width: 24rem;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const ValueInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.caption.regular}
`

export const ValueInput = styled.input<{
  isError: boolean
  isLoading: boolean | undefined
}>`
  width: 100%;
  height: 3.2rem;
  display: block;
  background: ${({ theme, isLoading }) =>
    isLoading ? theme.color.gray['900'] : 'none'};

  border: 0.0625rem solid
    ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.gray['700']};
  border-radius: 0.5rem;
  outline: none;
  text-indent: 1.25rem;
  color: ${({ theme, isError, isLoading }) =>
    isError
      ? theme.color.error
      : isLoading
      ? theme.color.gray['700']
      : theme.color.black};

  ${({ theme }) => theme.typo.text_sm.regular};

  &:focus {
    border: 0.0625rem solid
      ${({ theme, isError }) =>
        isError ? theme.color.error : theme.color.main};
  }

  &::placeholder {
    color: ${({ theme, isError }) =>
      isError ? theme.color.error : theme.color.gray['400']};
    ${({ theme }) => theme.typo.text_sm.regular};
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
