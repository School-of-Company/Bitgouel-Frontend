import styled from '@emotion/styled'

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 1.5rem;

  span:first-child {
    ${({ theme }) => theme.typo.title_md.semibold};
    color: ${({ theme }) => theme.color.black};
    margin: 0;
  }

  span {
    ${({ theme }) => theme.typo.text_md.regular};
    color: ${({ theme }) => theme.color.gray['400']};
  }

  b {
    color: ${({ theme }) => theme.color.main};
    ${({ theme }) => theme.typo.text_md.regular}
  }
`

export const CertificateBox = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-content: center;
  flex-direction: column;

  span:first-child {
    ${({ theme }) => theme.typo.text_lg.semibold};
    margin-bottom: 0.5rem;
    display: flex;
    align-content: center;
  }

  svg {
    margin-left: 0.25rem;
    cursor: pointer;
  }
`

export const CertificateListBox = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const CertificateItemBox = styled.div`
  gap: 0.5rem;
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

export const CertificatePlusInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const PlusCertificateIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const LectureListBox = styled.div`
  margin-top: 2.5rem;

  b {
    ${({ theme }) => theme.typo.title_sm.semibold};
  }
`

export const LectureList = styled.div`
  margin-top: 0.75rem;
`
