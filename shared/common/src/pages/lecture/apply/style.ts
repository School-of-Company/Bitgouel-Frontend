import styled from '@emotion/styled'

export const ApplyInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  span {
    ${({ theme }) => theme.typo.text_sm.medium};
    color: ${({ theme }) => theme.color.gray['400']};
  }
`
