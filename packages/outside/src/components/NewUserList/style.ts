import styled from '@emotion/styled'

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75rem;
  height: 32.625rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`
