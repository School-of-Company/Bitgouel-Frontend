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
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['700']};
  
  input {
    ${({ theme }) => theme.typo.text_lg.medium};
    border: none;
    outline: none;
    width: 2rem;
    height: 2rem;
    background: none;
    caret-color: ${({ theme }) => theme.color.main};
    padding-left: ${({length}) => length === 1 ? '1.2rem' : length === 2 ? '0.8rem' : '2rem'};
  }
`
