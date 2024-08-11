import styled from '@emotion/styled'

export const SchoolItemInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.125rem;
`

export const SchoolItemInput = styled.input<{ type: string }>`
  width: ${({ type }) => (type === '학과 이름' ? '43.375rem' : '100%')};
  height: 3.375rem;
  border-radius: 0.5rem;
  text-indent: 1.25rem;
  border: 1px solid ${({ theme }) => theme.color.gray['700']};
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.gray['400']};
    ${({ theme }) => theme.typo.text_sm.regular};
  }
`

export const CancelContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  align-items: center;
`
