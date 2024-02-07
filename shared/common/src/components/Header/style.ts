import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

export const HeaderWrapper = styled.div<{
  bgColor: string
  borderColor: string
  isAuth: boolean
}>`
  width: 100%;
  height: 4.875rem;
  display: ${({ isAuth }) => (isAuth ? 'none' : 'flex')};
  position: fixed;
  justify-content: center;
  top: 0;
  transition: all 0.5s;
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: ${({ borderColor }) => borderColor};
  z-index: 999;
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 75rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export const SymbolContainer = styled.div<{ url: StaticImageData }>`
  width: 2.375rem;
  height: 2.375rem;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
  cursor: pointer;
`

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`

export const MenuItem = styled.span<{ isSameRoute: boolean; color: string }>`
  cursor: pointer;
  ${({ theme }) => theme.typo.text_md.regular}
  font-weight: 400;
  color: ${({ isSameRoute, color, theme }) =>
    isSameRoute ? color : theme.color.gray['700']};
  &:hover {
    color: ${({ theme }) => theme.color.gray['400']};
  }
`

export const CreateIcon = styled.div<{ view: string }>`
  display: ${({ view }) => (view === 'none' ? 'none' : 'flex')};
`

export const ButtonWrapper = styled.div<{ view: string }>`
  position: absolute;
  right: 23%;
  display: ${({ view }) => view};
  svg {
    cursor: pointer;
    margin-left: 1rem;
    fill: ${({ theme }) => theme.color.gray['800']};
    &:hover {
      fill: ${({ theme }) => theme.color.main};
    }
  }
`

export const LoginButton = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 0.5rem 0.75rem;
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

export const SelectFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
