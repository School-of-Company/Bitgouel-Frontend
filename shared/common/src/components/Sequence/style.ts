import styled from '@emotion/styled'

export const SequenceWrapper = styled.div`
  div {
    &:last-child {
      div {
        display: none;
      }
    }
  }
`

export const TextContainer = styled.div`
  margin-bottom: 3rem;
  ${({ theme }) => theme.typo.text_sm.regular};
  display: flex;
  flex-direction: row-reverse;
  color: ${({ theme }) => theme.color.white};
  opacity: 0.7;
  cursor: pointer;
  svg {
    margin-left: 1rem;
  }
  div {
    position: absolute;
    margin-right: 0.4375rem;
    margin-top: 1rem;
    width: 0.125rem;
    height: 3.225rem;
    background-color: ${({ theme }) => theme.color.white};
    opacity: 0.7;
  }
`
