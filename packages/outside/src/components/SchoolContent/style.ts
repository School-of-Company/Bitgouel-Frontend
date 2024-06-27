import styled from '@emotion/styled'

export const SchoolItemBox = styled.div`
  width: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  ${({ theme }) => theme.typo.text_lg.medium};
  padding: 1rem 2rem;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.gray['900']};
  }
`
