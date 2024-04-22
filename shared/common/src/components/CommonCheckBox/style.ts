import styled from '@emotion/styled'

export const CommonCheckBoxContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;

  svg {
    position: absolute;
    left: 4px;
    top: 4px;
    cursor: pointer;
    pointer-events: none;
  }
`

export const CommonCheckBoxStyle = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 1.2rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['400']};
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.color.white};
  appearance: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.color.main};
    border: 0.0625rem solid ${({ theme }) => theme.color.main};
  }
`
