import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  background-color: red;
  width: 100%;
  height: 4.875rem;
`
export const MenuContainer = styled.div`
  display: flex;
  background-color: blue;
`

export const Symbol = styled.div<{ url: any }>`
  width: 2.375rem;
  height: 2.375rem;
  background-image: url(${({ url }) => url.src});
`

export const MenuList = styled.div``

export const MenuItem = styled.span`

`
