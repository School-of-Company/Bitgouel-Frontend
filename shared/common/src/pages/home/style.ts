import styled from '@emotion/styled'

export const mainWrraper = styled.div``

export const slideBg = styled.div<{ url: any }>`
  height: 50rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
  align-items: center;
`

export const bgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.title_lg};
  }
`

export const view = styled.div`
  margin-top: 2.5rem;
  width: 7.5rem;
  height: 2.3125rem;
  border: 0.125rem ${({ theme }) => theme.color.white} solid;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #288be1;
    border: 0.125rem #288be1 solid;
    transition: 0.5s;
  }
`
