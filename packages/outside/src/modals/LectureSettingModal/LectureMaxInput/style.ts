import styled from '@emotion/styled'

export const LectureMaxInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${({ theme }) => theme.typo.text_lg.medium};
`

export const MaxInputBox = styled.div<{ length: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.color.gray['700']};
  border-radius: 0.5rem;
  padding: 0.5rem;

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    border: none;
    outline: none;
    width: 1rem;
    height: 1rem;
    background: none;
    caret-color: ${({ theme }) => theme.color.main};
    padding-left: ${({ length }) =>
      length === 1 ? '0.7rem' : length === 2 ? '-3.5rem' : '1rem'};
  }
`
