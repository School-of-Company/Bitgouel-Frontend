'use client'

import styled from '@emotion/styled'

export const SemiTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2.5rem;
`

export const SubTitleSub = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_lg.medium};
`

export const SubTitleMain = styled.span`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.title_lg.semibold}
`
