import styled from '@emotion/styled'

export const NoneResultWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoneResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${({ theme }) => theme.color.gray['400']};
    ${({ theme }) => theme.typo.title_sm.regular};
    margin-top: 0.5rem;
  }
`
