import styled from '@emotion/styled'

export const SchoolIntroWrapper = styled.div`
  display: inline-grid;
  color: white;
  transition: transform 0.3s;
  transform: perspective(50rem) rotateY(0deg);
  transform-style: preserve-3d;
  &:hover {
    transform: perspective(50rem) rotateY(180deg);
  }
  & > * {
    grid-area: 1 / 1 / 1 / 1;
    width: 18.75rem;
    height: 15rem;
    border-radius: 0.5rem;
    backface-visibility: hidden;
  }
`

export const MainWrapperFront = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-wrap: wrap;
`

export const TextContainerFront = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 2rem 0 2rem;
  span {
    color: ${({ theme }) => theme.color.black};
  }
`

export const SubText = styled.span`
  ${({ theme }) => theme.typo.text_sm};
`

export const TitleText = styled.span`
  ${({ theme }) => theme.typo.text_lg};
`

export const ImgWrapper = styled.div`
  width: 100%;
  margin: 0 2rem 2rem 2rem;
  display: flex;
  justify-content: flex-end;
  margin-top: 3.125rem;
`

export const MainWrapperBack = styled.div`
  background-color: ${({ theme }) => theme.color.blue[300]};
  transform: rotateY(180deg);
  display: flex;
  flex-wrap: wrap;
  span {
    color: ${({ theme }) => theme.color.white};
  }
`

export const TextContainerBack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 2rem 0 2rem;
`

export const ValueTextBox = styled.div`
  margin: 0 2rem 2rem 2rem;
  ${({ theme }) => theme.typo.text_sm}
`
