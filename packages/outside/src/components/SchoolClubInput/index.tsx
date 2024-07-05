import styled from '@emotion/styled'

const ClubInput = styled.input`
  width: 30rem;
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

const SchoolClubInput = ({ placeholder }: { placeholder: string }) => {
  return <ClubInput placeholder={placeholder} />
}

export default SchoolClubInput
