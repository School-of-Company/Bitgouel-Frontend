import styled from '@emotion/styled'

export const SchoolIntroWrapper = styled.button`
  display: inline-grid;
  color: white;
  transition: transform 0.3s;
  transform: perspective(50rem) rotateY(0deg);
  transform-style: preserve-3d;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;

  &:focus, &:active {
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
  align-items: flex-start;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  span {
    color: ${({ theme }) => theme.color.black};
  }
`

export const SubText = styled.span`
  ${({ theme }) => theme.typo.text_sm.regular};
`

export const TitleText = styled.span`
  ${({ theme }) => theme.typo.text_lg.semibold};
  text-align: left;
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
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.color.white};
  }
`

export const TextContainerBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 2rem 2rem 0 2rem;
`

export const DepartMentsTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 2rem 2rem 2rem;
  text-align: left;
  gap: 1.2rem;
`

export const DepartMentsTextBox = styled.div`
  ${({ theme }) => theme.typo.text_sm.regular};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 0;
  }
`
