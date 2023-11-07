import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 4.875rem;
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  transition: all 0.5s;
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 75rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export const MenuWrapper = styled.div`
  ${({ theme }) => theme.typo.text_lg};
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray[700]};
  display: flex;
  justify-content: space-between;
  width: 20rem;
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.gray[400]};
  }
`

export const LoginButton = styled.div`
  background-color: rgb(255, 255, 255, 0.2);
  width: 4.125rem;
  height: 2.375rem;
  border-radius: 0.5rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(0.25rem);
  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.white};
    margin: 0;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
  }
`
