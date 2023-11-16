import styled from '@emotion/styled'

export const ActivityItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  cursor: pointer;
  width: 15.5rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray[900]};
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  margin: 0.75rem 0.75rem;
`

export const TextContainer = styled.div`
  width: 100%;
`

export const AcitivTitle = styled.span`
  ${({ theme }) => theme.typo.text_lg};
`

export const MainText = styled.span`
  ${({ theme }) => theme.typo.text_md};
  color: ${({ theme }) => theme.color.gray[400]};
`

export const Number = styled.span`
  ${({ theme }) => theme.typo.text_md};
  color: ${({ theme }) => theme.color.gray[700]};
  margin-right: 0.5rem;
`
