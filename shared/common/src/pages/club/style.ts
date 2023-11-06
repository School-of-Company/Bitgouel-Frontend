import styled from '@emotion/styled'

export const ClubWrraper = styled.div``

export const SlideBg = styled.div<{ url: any }>`
  height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  align-items: center;
`

export const BgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.title_lg};
  }
`
