import styled from '@emotion/styled'

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.5rem 1.625rem 1.5rem;
  border-radius: 0.5rem;
  width: 22.5rem;
  height: auto;
  background-color: ${({ theme }) => theme.color.white};
`

export const FilterTitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const TitleText = styled.h3`
  ${({ theme }) => theme.typo.text_lg.semibold};
  margin: 0;
`

export const RadioListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
`

export const RadioItem = styled.div`
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
  background: ${({ checked }) => (checked ? 'none' : '#00000040')};
  border: ${({ theme, checked }) =>
  checked ? `0.125rem solid ${theme.color.main}` : '0.125rem solid #00000040'};
`

export const RadioCircle = styled.div<{checked: boolean}>`
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.main};
  z-index: ${({checked}) => checked ? '1' : '-1'};
`

export const RadioText = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
  color: ${({ theme }) => theme.color.black};
`