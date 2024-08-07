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
    border-radius: 0 0.5rem 0.5rem 0;
    width: 1rem;
  }

  /* 스크롤바 썸 설정 */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray['700']};
    border-radius: 0.9375rem;
    border: 4px solid ${({ theme }) => theme.color.white};
  }
`

export const ListButtonContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.color.gray['900']};
  width: 7.25rem;
  box-sizing: content-box;
  padding: 0 1.25rem;
`

export const ListButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  text-align: left;
  cursor: pointer;
  outline: none;
  ${({ theme }) => theme.typo.caption.regular};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray['900']};

  &:hover {
    background-color: ${({ theme }) => theme.color.gray['900']};
  }
`
