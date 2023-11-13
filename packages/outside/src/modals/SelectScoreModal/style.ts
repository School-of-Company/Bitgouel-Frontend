import styled from '@emotion/styled'

export const SelectScoreBox = styled.div`
  position: absolute;
  bottom: 4rem;
  width: 11.75rem;
  height: 8.125rem;
  background-color: ${({ theme }) => theme.color.gray[500]};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 7.5rem;
    right: 4.375rem;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-top: 1.875rem solid ${({ theme }) => theme.color.gray[500]};
  }
`

export const SelectScoreTitle = styled.h3`
  ${({ theme }) => theme.typo.text_lg}
  margin: 0;
  margin-top: 1rem;
  margin-left: 1rem;
`

export const SelectScoreItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: 1rem;
  gap: 0.5rem;
`

export const SelectScoreLabel = styled.label`
  display: flex;
  align-items: center;
`

export const SelectScoreCheckBox = styled.input`
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

export const SelectScoreText = styled.span`
  ${({ theme }) => theme.typo.text_sm}
  margin-left: 0.5rem;
`
