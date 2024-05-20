import styled from '@emotion/styled'

export const CertificationInputBox = styled.div`
  div {
    width: 24rem;
    input {
      width: 24rem;
    }

    div {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

export const CertificationButton = styled.span`
  width: 4rem;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.3rem;
  ${({ theme }) => theme.typo.text_lg.semibold};
  border-radius: 0.5rem;
  cursor: pointer;
`

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.caption.regular}
  float: left;
`
