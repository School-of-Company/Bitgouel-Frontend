import styled from '@emotion/styled'

export const MyPageWrapper = styled.div<{ url: any }>`
  background-image: url(${({ url }) => url.src});
  position: absolute;
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
`

export const BlackBox = styled.div`
    width: 636px;
    height: 920px;
    background-color: ba;
`