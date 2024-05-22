import styled from '@emotion/styled'

export const RadioItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const RadioBox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme, checked }) => (checked ? 'none' : theme.color.gray['900'])};
  border: ${({ theme, checked }) =>
    checked
      ? `0.125rem solid ${theme.color.main}`
      : `0.125rem solid ${theme.color.gray['900']}`};
`

export const RadioCircle = styled.div<{ checked: boolean }>`
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.main};
  z-index: ${({ checked }) => (checked ? '1' : '-1')};
`

export const RadioText = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.black};
`
