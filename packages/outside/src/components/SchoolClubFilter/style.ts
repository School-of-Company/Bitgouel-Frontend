import styled from '@emotion/styled'

export const ContSelect = styled.div`
  position: relative;
  justify-content: flex-end;
`

export const XIconContainer = styled.div`
  position: absolute;
  width: 16.1rem;
  height: 3.5775rem;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

export const SelectContainer = styled.button<{ baseColor: string }>`
  width: 14rem;
  height: 3.5775rem;
  border: 1px solid ${({ theme }) => theme.color.gray['700']};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
  text-align: left;
  text-indent: 0.875rem;
  cursor: pointer;
  outline: none;
  position: absolute;
  z-index: 1;

  color: ${({ baseColor, theme }) =>
    baseColor === '핵심분야' ? theme.color.gray['400'] : theme.color.black};
`

export const ListMember = styled.ul`
  position: absolute;
  height: 7.625rem;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 14rem;
  z-index: 2;

  /* 스크롤바 설정 */
  ::-webkit-scrollbar {
    background-color: white;
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
  width: 100%;
  height: 2.5rem;
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  text-align: left;
  text-indent: 1.25rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray['900']};
  }
`
