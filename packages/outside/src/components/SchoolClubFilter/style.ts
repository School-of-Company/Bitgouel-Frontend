import styled from '@emotion/styled'

export const ContSelect = styled.div`
  position: relative;
  justify-content: flex-end;
`

export const XIconContainer = styled.div`
  position: absolute;
  width: 16.1rem;
  height: 3.5775rem;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

export const SelectContainer = styled.button<{ baseColor: string }>`
  width: 14rem;
  height: 3.5775rem;
  border: 1px solid ${({ theme }) => theme.color.gray['700']};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
  text-align: left;
  text-indent: 0.875rem;
  cursor: pointer;
  outline: none;
  position: absolute;
  z-index: 1;

  color: ${({ baseColor, theme }) =>
    baseColor === '핵심분야' ? theme.color.gray['400'] : theme.color.black};
`
