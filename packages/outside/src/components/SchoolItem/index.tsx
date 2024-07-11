import styled from '@emotion/styled'

const SchoolNameInput = styled.input`
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

const SchoolItem = ({ placeholder }: { placeholder: string }) => {
  return <SchoolNameInput placeholder={placeholder} />
}

export default SchoolItem
