import styled from '@emotion/styled'

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
  width: 37.5rem;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const ListTitle = styled.div`
  ${({ theme }) => theme.typo.text_sm.semibold};
`

export const ListContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 3.625rem;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.gray['900']};
    border-radius: 1rem;
  }
`

export const ContentTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;

  svg {
    margin: 0;
  }

  span {
    ${({ theme }) => theme.typo.text_lg.medium};
  }
`
