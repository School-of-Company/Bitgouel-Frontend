import styled from '@emotion/styled'

export const PostItem = styled.div`
  width: 100%;
  height: 3.625rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  
  div {
    margin: 0 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.gray['900']};
  }
`

export const PostTitle = styled.span`
  ${({ theme }) => theme.typo.text_lg.medium};
  color: ${({ theme }) => theme.color.black};
`

export const PostDate = styled.span`
  ${({ theme }) => theme.typo.text_md.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`
