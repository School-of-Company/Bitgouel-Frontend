import styled from '@emotion/styled'

export const ApplyDisplayContainer = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1rem;
`

export const DisplayBar = styled.div`
  padding-left: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  height: 1.25rem;
  gap: 4rem;
  margin-top: 3.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.1875rem;
  }
`

export const DisplayBarSpan = styled.span<{ width: string }>`
  width: ${({ width }) => width};
  color: ${({ theme }) => theme.color.gray['400']};
  ${({ theme }) => theme.typo.text_sm.medium};
`

export const SelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const AllSelectBox = styled.label`
  width: 7.75rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  background: none;
  ${({ theme }) => theme.typo.text_md.medium};
  border: 1px solid ${({ theme }) => theme.color.gray['400']};
  color: ${({ theme }) => theme.color.gray['400']};

  svg {
    fill: ${({ theme }) => theme.color.gray['400']};
    margin-right: 0.5rem;
  }

  input {
    display: none;
  }
`

export const ApplyButton = styled(AllSelectBox)<{ isCancel: boolean }>`
  width: 9.6875rem;
  height: 2.5rem;
  background-color: ${({ theme, isCancel }) =>
    isCancel ? theme.color.error : theme.color.main};
  border: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};

  svg {
    fill: ${({ theme }) => theme.color.white};
  }
`
