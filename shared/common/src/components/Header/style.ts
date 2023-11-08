import styled from '@emotion/styled'

export const HeaderWrapper = styled.div<{
  bgColor: string
  borderColor: string
}>`
  width: 100%;
  height: 4.875rem;
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  transition: all 0.5s;
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: ${({ borderColor }) => borderColor};
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 75rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export const SimbolContainer = styled.div<{ url: any }>`
  width: 2.375rem;
  height: 2.375rem;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
`

export const MenuWrapper = styled.div`
  ${({ theme }) => theme.typo.text_lg};
  display: flex;
  justify-content: space-between;
  width: 20rem;
`

export const MenuItem = styled.span<{ isSameRoute: boolean; color: string }>`
  cursor: pointer;
  font-weight: 400;
  color: ${({ isSameRoute, color, theme }) =>
    isSameRoute ? color : theme.color.gray[700]};
  &:hover {
    color: ${({ theme }) => theme.color.gray[400]};
  }
`

export const ButtonWrapper = styled.div<{ view: string }>`
  position: absolute;
  right: 23%;
  display: ${({ view }) => view};
  svg {
    cursor: pointer;
    margin-left: 1rem;
    fill: ${({ theme }) => theme.color.gray[800]};
    &:hover {
      fill: ${({ theme }) => theme.color.main};
    }
  }
`

export const LoginButton = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
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
    background-color: rgb(209, 209, 209, 0.5);
  }
`
