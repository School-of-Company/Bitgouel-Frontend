import styled from '@emotion/styled'

export const MyPageWrapper = styled.div<{ url: any }>`
  background-image: url(${({ url }) => url.src});
  position: absolute;
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
`
