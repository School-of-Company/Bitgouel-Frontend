import styled from "@emotion/styled"

export const SchoolNameInput = styled.input`
  text-indent: 1.25rem;
  height: 3.375rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray['700']};
  outline: none;
`

export const ClubItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CreateDepartmentContainer = styled.div`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  text-indent: 1rem;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.color.gray['700']};
    ${({ theme }) => theme.typo.text_lg.regular};
  }
`
