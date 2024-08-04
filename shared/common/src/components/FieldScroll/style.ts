import styled from '@emotion/styled'

export const ListMember = styled.div`
  position: absolute;
  width: 10.875rem;
  height: 7.25rem;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.color.gray['700']};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
  list-style: none;
  z-index: 2;
  top: 2rem;

  /* 스크롤바 설정 */
  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.color.white};
    padding: 0.25rem;
    border-radius: 0.5rem;
    width: 1rem;
    border: 4px solid ${({ theme }) => theme.color.white};
  }

  /* 스크롤바 썸 설정 */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray['700']};
    border-radius: 0.9375rem;
    border: 4px solid ${({ theme }) => theme.color.white};
  }
`

export const ListButton = styled.button`
  width: 8.75rem;
  height: 2.5rem;
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  text-align: left;
  text-indent: 1.25rem;
  cursor: pointer;
  outline: none;
  ${({ theme }) => theme.typo.caption.regular};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray['900']};

  &:hover {
    background-color: ${({ theme }) => theme.color.gray['900']};
  }
`
