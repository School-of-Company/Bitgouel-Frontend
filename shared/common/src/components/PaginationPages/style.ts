import styled from '@emotion/styled'

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  gap: 1rem;
`

export const NumbersContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo.caption.regular};
`
export const PageNumber = styled.div<{ selected: boolean }>`
  color: ${({ theme, selected }) =>
    selected ? theme.color.main : theme.color.black};
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`

export const ArrowContainer = styled.div<{ isPrev: boolean }>`
  display: flex;
  align-items: center;
  svg {
    transform: ${({ isPrev }) => isPrev && 'rotate(180deg)'};
    cursor: pointer;
  }
`
