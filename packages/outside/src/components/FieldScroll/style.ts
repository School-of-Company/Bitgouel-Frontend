import styled from '@emotion/styled'

export const ListMember = styled.div`
  position: absolute;
  width: 10.9375rem;
  height: 7.3125rem;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.color.gray['700']};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
  list-style: none;
  padding: 0.5rem 0 0 1.25rem;
  margin: 0;
  z-index: 2;
  top: 2rem;

  /* 스크롤바 설정 */
  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0.625rem;
    width: 0.5rem;
    padding-right: 0.625rem;
    padding: 0.625rem 0;
  }

  /* 스크롤바 썸 설정 */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray['900']};
    border-radius: 0.9375rem;
    width: 0.3125rem;
    z-index: 1;
  }

  /* 스크롤바 트랙 설정 */
  /* ::-webkit-scrollbar-track {
    padding: 10px 0;
  } */
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
  padding: 0.5rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray['900']};
  }
`
