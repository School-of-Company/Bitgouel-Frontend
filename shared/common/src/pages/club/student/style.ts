import styled from '@emotion/styled'

export const SlideBg = styled.div<{ url: any }>`
  height: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ url }) => url.src});
  background-position: center;
  background-size: cover;
  align-items: flex-end;
`

export const BgContainer = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const ClubTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.title_lg.semibold};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ClubButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255, 0.2);
  height: 2.5rem;
  margin-left: 1rem;
  padding: 0 0.75rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(0.25rem);
  svg {
    fill: ${({ theme }) => theme.color.white};
  }
  span {
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.typo.text_md.regular};
    margin-left: 0.25rem;
  }
  &:hover {
    background-color: rgb(255, 255, 255, 0.4);
  }
`

export const CertificateWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
`

export const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75rem;
  height: 100%;
  justify-content: center;
  margin-top: 4rem;
  gap: 2.6rem;
`

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

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ theme }) => theme.typo.text_md.regular};
  color: ${({ theme }) => theme.color.gray['400']};
  margin-left: 1rem;

  span {
    margin: 0;
  }

  b {
    color: ${({ theme }) => theme.color.main};
    ${({ theme }) => theme.typo.text_md.regular}
  }
`

export const CertificateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

export const CertificatePlusBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.color.black};

  h3 {
    ${({ theme }) => theme.typo.text_lg.semibold};
    margin: 0;
    margin-left: 1rem;
  }

  svg {
    cursor: pointer;
  }
`

export const CertificateListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 1rem;
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
`
