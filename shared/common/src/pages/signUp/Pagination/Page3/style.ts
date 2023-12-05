import styled from '@emotion/styled'

export const CertificationInputBox = styled.div<{ placeholderText: string }>`
  display: ${({ placeholderText }) =>
    placeholderText === '전화번호 (- 제외)' || placeholderText === '이메일'
      ? 'flex'
      : 'block'};
  align-items: center;
  justify-content: space-around;
  width: ${({ placeholderText }) =>
    placeholderText === '전화번호 (- 제외)' ||
    (placeholderText === '이메일' && '100%')};

  div {
    width: ${({ placeholderText }) =>
      placeholderText === '전화번호 (- 제외)' || placeholderText === '이메일'
        ? '19.7rem'
        : '24rem'};

    input {
      width: ${({ placeholderText }) =>
        placeholderText === '전화번호 (- 제외)' || placeholderText === '이메일'
          ? '100%'
          : '24rem'};
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
