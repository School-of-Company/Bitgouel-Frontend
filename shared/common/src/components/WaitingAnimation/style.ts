import styled from '@emotion/styled'

export const WaitingAnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
  }

  span {
    ${({ theme }) => theme.typo.text_lg}
    color: ${({ theme }) => theme.color.gray['500']};
  }
`
