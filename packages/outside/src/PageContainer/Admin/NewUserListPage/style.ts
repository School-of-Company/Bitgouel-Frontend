import styled from '@emotion/styled'

export const AloneCheckBox = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.color.main};

  cursor: pointer;
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.text_md.medium};
  margin-right: 0.625rem;
`