'use client'

import * as S from './style'
import { useRouter } from 'next/navigation'
import {
  CalendarIcon,
  PlusCertificate,
  PersonOut,
  AddCertificate,
} from '../../../assets'
import Bg2 from '../../../assets/png/mainBg2.png'
import { ChangeEvent, use, useState } from 'react'
import { SelectCalendarModal } from '../../../modals'

interface Certificate {
  name: string
  acquisitionDate: string
}

const StudentPage = () => {
  const { push } = useRouter()
  const [certificateList, setCertificateList] = useState<Certificate[]>([
    { name: '정보처리기능사', acquisitionDate: '2023-02-16' },
    { name: '정보처리기능사', acquisitionDate: '2023-02-16' },
    { name: '정보처리기능사', acquisitionDate: '2023-02-16' },
  ])
  const [isAddCertificate, setIsAddCertificate] = useState<boolean>(true)
  const [certificate, setCertificate] = useState<string>('')
  const [isCertificateDate, setIsCertificateDate] = useState<boolean>(false)
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const [certificateDateText, setCertificateDateText] = useState<string>('')

  const onCreate = () => {
    setCertificateList((prev) => [
      ...prev,
      {
        name: certificate,
        acquisitionDate: certificateDateText,
      },
    ])
    setCertificate('')
    setCertificateDateText('')
  }
  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ClubTitle>학생 정보</S.ClubTitle>
          <S.ButtonContainer>
            <S.ClubButton onClick={() => push('/main/club/student/activity')}>
              <PersonOut />
              <span>학생 활동</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.CertificateWrapper>
        <S.CertificateContainer>
          <S.ProfileBox>
            <h3>홍길동</h3>
            <S.ProfileInfoBox>
              <span>010-1234-5678</span>
              <span>a12345679@gmail.com</span>
              <span>
                총 학점 <b>300</b>
              </span>
            </S.ProfileInfoBox>
          </S.ProfileBox>
          <S.CertificateBox>
            <S.CertificatePlusBox>
              <h3>자격증</h3>
              <S.PlusCertificateIcon onClick={() => setIsAddCertificate((prev) => !prev)}>
              <PlusCertificate />
              </S.PlusCertificateIcon>
            </S.CertificatePlusBox>
            <S.CertificateListBox>
              {certificateList.map((certificate) => (
                <S.CertificateItemBox>
                  <S.ListToggle list='추가됨' />
                  <span>{certificate.name}</span>
                  <span>
                    {certificate.acquisitionDate
                      .split('')
                      .map((v) => (v === '-' ? '.' : v))
                      .join('')}
                  </span>
                </S.CertificateItemBox>
              ))}
              {isAddCertificate && (
                <S.AddCertificateBox>
                  <S.ListToggle list='추가' />
                  <S.AddCertificateInput
                    type='text'
                    value={certificate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCertificate(e.target.value)
                    }
                  />
                  <S.AddCertificateDateBox>
                    <S.SelectDateContainer>
                      {isCertificateDate && (
                        <SelectCalendarModal
                          date={certificateDate}
                          setDate={setCertificateDate}
                          setText={setCertificateDateText}
                        />
                      )}
                      <div
                        onClick={() => setIsCertificateDate((prev) => !prev)}
                      >
                        <CalendarIcon />
                      </div>
                    </S.SelectDateContainer>
                    <S.ShowDateText>{certificateDateText}</S.ShowDateText>
                  </S.AddCertificateDateBox>
                  {certificate !== '' && certificateDateText !== '' && (
                    <S.AddCertificateIcon onClick={onCreate}>
                      <AddCertificate />
                    </S.AddCertificateIcon>
                  )}
                </S.AddCertificateBox>
              )}
            </S.CertificateListBox>
          </S.CertificateBox>
        </S.CertificateContainer>
      </S.CertificateWrapper>
    </div>
  )
}

export default StudentPage
