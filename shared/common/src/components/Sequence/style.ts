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
  font-size: 0.8125rem;
  display: flex;
  flex-direction: row-reverse;
  color: #fff;
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
    height: 3.0075rem;
    background-color: #fff;
    opacity: 0.7;
  }
`
