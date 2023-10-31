import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  min-width: 100vw;
  height: 4.875rem;
  display: flex;
  justify-content: center;
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export const MenuWrapper = styled.div`
  font-size: 20px;
  color: #b8b8b8;
  display: flex;
  justify-content: space-between;
  width: 320px;
  span:hover {
    cursor: pointer;
    color: #6b6b6b;
  }
`

export const LoginBtn = styled.div`
  background-color: rgb(255, 255, 255, 0.2);
  width: 66px;
  height: 38px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  span {
    font-size: 16px;
    color: #ffffff;
    margin: 0;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
  }
`
