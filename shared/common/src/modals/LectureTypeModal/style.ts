import styled from '@emotion/styled'

export const SelectFilterBox = styled.div<{ location: string }>`
  position: absolute;
  top: ${({ location }) =>
    location === '필터' ? '15.7rem' : location === '개설' ? '-7.5rem' : '4rem'};
  width: 11.75rem;
  height: 8.125rem;
  background-color: ${({ theme }) => theme.color.gray[500]};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    top: ${({ location }) =>
      location === '필터' || location === '헤더' ? '-1.25rem' : '7.6rem'};
    right: 4.375rem;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    ${({ location }) =>
      location === '필터' || location === '헤더'
        ? 'border-bottom: 1.875rem solid #818181'
        : 'border-top: 1.875rem solid #818181'};
  }
`

export const SelectFilterTitle = styled.h3`
  ${({ theme }) => theme.typo.text_lg}
  margin: 0;
  margin-top: 1rem;
  margin-left: 1rem;
`

export const SelectFilterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: 1rem;
  gap: 0.5rem;
`

export const SelectFilterLabel = styled.label`
  display: flex;
  align-items: center;
`

export const SelectFilterCheckBox = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  margin: 0;
  cursor: pointer;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.color.main};
  }
`

export const SelectFilterText = styled.span`
  ${({ theme }) => theme.typo.text_sm}
  margin-left: 0.5rem;
`
