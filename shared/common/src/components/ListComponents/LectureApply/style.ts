import styled from '@emotion/styled'

export const ApplyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 32.625rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CompleteName = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const Name = styled.span`
  width: 6rem;
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.text_lg.medium};
`