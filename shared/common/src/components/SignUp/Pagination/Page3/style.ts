import styled from '@emotion/styled'

export const CertificationInputBox = styled.div<{ idx: number }>`
  display: ${({ idx }) => (idx === 0 || idx === 2 ? 'flex' : 'block')};
  align-items: center;
  justify-content: space-around;
  width: ${({ idx }) => (idx === 0 || idx === 2) && '100%'};

  div {
    width: ${({ idx }) => (idx === 0 || idx === 2 ? '19rem' : '24rem')};

    input {
      width: ${({ idx }) => (idx === 0 || idx === 2 ? '100%' : '24rem')};
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
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_lg};
  border-radius: 0.5rem;
  cursor: pointer;
`
