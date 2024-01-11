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

export const Title = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ClubButton = styled.div`
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

export const ClubWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75rem;
  height: 100%;
  margin-top: 3rem;
  gap: 3.75rem;
`

export const ClubGroupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`

export const ClubSchoolTitle = styled.div`
  ${({ theme }) => theme.typo.title_sm.semibold};
  color: ${({ theme }) => theme.color.black};
`

export const ClubListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`
