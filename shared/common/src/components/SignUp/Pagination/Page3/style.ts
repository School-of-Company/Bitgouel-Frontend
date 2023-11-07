import styled from '@emotion/styled'

export const CertificationInputBox = styled.div<{ placeholderText: string }>`
  display: ${({ placeholderText }) =>
    placeholderText === '전화번호 (- 제외)' ||
    placeholderText === '이메일' ||
    placeholderText.includes('비밀번호')
      ? 'flex'
      : 'block'};
  align-items: ${({ placeholderText }) =>
    placeholderText.includes('비밀번호') ? 'flex-start' : 'center'};
  justify-content: space-around;
  flex-direction: ${({ placeholderText }) =>
    placeholderText.includes('비밀번호') ? 'column' : 'row'};
  width: ${({ placeholderText }) =>
    (placeholderText === '전화번호 (- 제외)' ||
      placeholderText === '이메일' ||
      placeholderText.includes('비밀번호')) &&
    '100%'};

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
  ${({ theme }) => theme.typo.text_lg};
  border-radius: 0.5rem;
  cursor: pointer;
`

export const PasswordErrorText = styled.span`
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.caption}
  float: left;
`
