import styled from '@emotion/styled'

export const HomeWrraper = styled.div``

export const SlideBg = styled.div<{ url: any }>`
  height: 50rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;
  align-items: center;
  flex-direction: column-reverse;
`

export const BgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.25rem;
`

export const HomeTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg};
`

export const View = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    transform: rotate(90deg);
    margin-bottom: 0.5rem;
    ${({ theme }) => theme.typo.text_sm};
  }
`
