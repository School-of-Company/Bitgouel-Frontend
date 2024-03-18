import styled from '@emotion/styled'

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;

  h3 {
    ${({ theme }) => theme.typo.text_lg.semibold};
    margin: 0;
    margin-left: 1rem;
  }
`

export const CertificateItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${({ theme }) => theme.typo.text_md.regular};

  span {
    &:nth-of-type(1) {
      color: ${({ theme }) => theme.color.black};
    }

    &:nth-of-type(2) {
      color: ${({ theme }) => theme.color.gray['400']};
    }
  }
`
export const ListToggle = styled.div<{ list: '추가' | '추가됨' }>`
  width: 0.375rem;
  height: 0.375rem;
  background-color: ${({ theme, list }) =>
    list === '추가' ? theme.color.gray['700'] : theme.color.main};
  border-radius: 50%;
`

export const AddCertificateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const AddCertificateInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.main};
  width: 12.5rem;
  height: 1.5625rem;
  padding: 0;
  ${({ theme }) => theme.typo.text_md.regular};
`

export const AddCertificateDateBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.main};
  width: 10rem;
  height: 1.5625rem;
  gap: 0.6rem;
`

export const SelectDateContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  svg {
    cursor: pointer;
  }
`

export const ShowDateText = styled.span`
  ${({ theme }) => theme.typo.text_md.regular};
  margin-bottom: 0.4rem;
`

export const AddCertificateIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ModifyText = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.color.gray['700']};
  cursor: pointer;
`
