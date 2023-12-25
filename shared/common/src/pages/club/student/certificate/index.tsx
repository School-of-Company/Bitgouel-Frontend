'use client'

import { useRouter } from 'next/navigation'
import * as S from './style'
import { CertificatePlus, PersonOut } from '../../../../assets'
import Bg2 from '../../../../assets/png/mainBg2.png'
import Profile from '../../../../assets/png/Profile.png'
import { useState } from 'react'

const CertificatePage = () => {
  const { push } = useRouter()
  const [certificateList, setCertificateList] = useState<{name: string, acquisitionDate: string}[]>([{name: '정보처리기능사', acquisitionDate: '2023-02-16'}, {name: '정보처리기능사', acquisitionDate: '2023-02-16'}, {name: '정보처리기능사', acquisitionDate: '2023-02-16'}])
  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>학생 정보</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton>
              <PersonOut />
              <span>학생활동</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.CertificateWrapper>
        <S.CertificateContainer>
          <S.ProfileBox>
            <S.Profile url={Profile} />
            <h3>홍길동</h3>
            <S.ProfileInfoBox>
              <span>010-1234-5678</span>
              <span>a12345679@gmail.com</span>
              <span>총 학점 <b>300</b></span>
            </S.ProfileInfoBox>
          </S.ProfileBox>
          <S.CertificateBox>
            <S.CertificatePlusBox>
              <h3>자격증</h3>
              <CertificatePlus />
            </S.CertificatePlusBox>
            <S.CertificateListBox>
              {certificateList.map((certificate) => (
                <S.CertificateItemBox>
                    <div />
                    <span>{certificate.name}</span>
                    <span>{certificate.acquisitionDate.split("").map((v) => v === "-" ? "." : v).join("")}</span>
                </S.CertificateItemBox>
              ))}
             
            </S.CertificateListBox>
          </S.CertificateBox>
        </S.CertificateContainer>
      </S.CertificateWrapper>
    </div>
  )
}

export default CertificatePage
