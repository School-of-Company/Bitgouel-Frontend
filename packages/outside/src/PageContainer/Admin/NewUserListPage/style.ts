import styled from '@emotion/styled'

type SelectBoxTypes = 'allNew' | 'approve' | 'reject'

export const AloneCheckBox = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.color.main};

  cursor: pointer;
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.text_md.medium};
  margin-right: 0.625rem;
`

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
