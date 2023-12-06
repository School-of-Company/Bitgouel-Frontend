import styled from '@emotion/styled'

export const NoticeItem = styled.div`
  width: 100%;
  height: 3.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['900']};
  div {
    margin: 0 1rem;
  }
`

export const NoticeTitle = styled.span`
  ${({ theme }) => theme.typo.text_lg.medium};
  color: ${({ theme }) => theme.color.black};
`

export const NoticeDate = styled.span`
  ${({ theme }) => theme.typo.text_md.regular};
  color: ${({ theme }) => theme.color.gray['400']};
`
