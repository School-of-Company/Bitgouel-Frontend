'use client'

import {
  useGetCertificateList,
  useGetCertificateListTeacher
} from '@bitgouel/api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import {
  Bg2,
  PersonOut,
  PlusCertificate
} from '../../../assets'
import { Role } from '../../../atoms/index'
import CertificateItem from '../../../components/CertificateItem'
import { useModal } from '../../../hooks'
import * as S from './style'

interface Certificate {
  id: number
  name: string
  acquisitionDate: string
  isModify: boolean
}

interface StudentProps {
  student_id: string
}

const StudentPage: React.FC<StudentProps> = ({ student_id }) => {
  const { push } = useRouter()
  const [isAddCertificate, setIsAddCertificate] = useState<boolean>(false)
  const [certificateText, setCertificateText] = useState<string>('')
  const [modifyText, setModifyText] = useState<string>('')
  const [modifyDateText, setModifyDateText] = useState<string>('')
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const [certificateDateText, setCertificateDateText] = useState<string>('')
  const { openModal, closeModal } = useModal()

  const role = useRecoilValue(Role)
  const { data: certificateList } =
    role === 'ROLE_STUDENT'
      ? useGetCertificateList()
      : useGetCertificateListTeacher(student_id)

  console.log(certificateList)

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
              <S.PlusCertificateIcon
                onClick={() => setIsAddCertificate((prev) => !prev)}
              >
                <PlusCertificate />
              </S.PlusCertificateIcon>
            </S.CertificatePlusBox>
            <S.CertificateListBox>
              {certificateList?.data?.certifications.map((certificate, idx) => (
                <CertificateItem
                  key={idx}
                  certificateItems={certificate}
                  student_id={student_id}
                />
              ))}
            </S.CertificateListBox>
          </S.CertificateBox>
        </S.CertificateContainer>
      </S.CertificateWrapper>
    </div>
  )
}

export default StudentPage
