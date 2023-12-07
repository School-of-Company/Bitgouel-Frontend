import styled from '@emotion/styled'

export const SlideBg = styled.div<{ url: any }>`
  height: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  align-items: flex-end;
`

export const BgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const NotificationTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const NotificationButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.2);
  height: 2.5rem;
  margin-left: 1rem;
  padding: 0 0.75rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(0.25rem);
  svg {
    fill: ${({ theme }) => theme.color.white};
  }
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_md.regular};
    margin-left: 0.25rem;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.4);
  }
`

export const NotificationListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const NotificationListContainer = styled.div`
  width: 75rem;
  height: 100%;
  margin-top: 2.5rem;
`
