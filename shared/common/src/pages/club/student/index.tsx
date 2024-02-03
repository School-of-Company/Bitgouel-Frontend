'use client'

import {
  useGetCertificateList,
  useGetCertificateListTeacher,
  usePostCertificate,
  useGetStudentDetail,
} from '@bitgouel/api'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'
import {
  AddCertificate,
  Bg2,
  CalendarIcon,
  PersonOut,
  PlusCertificate,
} from '../../../assets'
import { CertificateRequest, RoleEnumTypes } from '@bitgouel/types'
import CertificateItem from '../../../components/CertificateItem'
import { useModal } from '../../../hooks'
import * as S from './style'
import { CreateModal, SelectCalendarModal } from '../../../modals'
import { toast } from 'react-toastify'
import { theme } from '../../../styles'

interface Certificate {
  id: number
  name: string
  acquisitionDate: string
}

interface StudentProps {
  studentId: string
  clubId: string
}

const StudentPage: React.FC<StudentProps> = ({ studentId, clubId }) => {
  const { push } = useRouter()

  const [isAddCertificate, setIsAddCertificate] = useState<boolean>(false)
  const [certificateText, setCertificateText] = useState<string>('')
  const [isCertificateDate, setIsCertificateDate] = useState<boolean>(false)
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const [certificateDateText, setCertificateDateText] = useState<string>('')
  const { openModal, closeModal } = useModal()

  const { data: myData } = useGetStudentDetail(clubId, studentId)

  const { mutate } = usePostCertificate()

  const role =
    typeof window !== 'undefined'
      ? (localStorage.getItem('Authority') as RoleEnumTypes)
      : null

  const { data: certificateList } =
    role === 'ROLE_STUDENT'
      ? useGetCertificateList()
      : useGetCertificateListTeacher(studentId)

  const onCreate = () => {
    const payload: CertificateRequest = {
      name: certificateText,
      acquisitionDate: `${certificateDate.getFullYear()}-${(
        certificateDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${certificateDate
        .getDate()
        .toString()
        .padStart(2, '0')}`,
    }
    mutate(payload)
    closeModal()
    window.location.reload()
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
            <h3>{myData?.data.name}</h3>
            <S.ProfileInfoBox>
              <span>{myData?.data.phoneNumber}</span>
              <span>{myData?.data.email}</span>
              <span>
                총 학점 <b>{myData?.data.credit}</b>
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
              {isAddCertificate && (
                <S.AddCertificateBox>
                  <S.ListToggle list='추가' />
                  <S.AddCertificateInput
                    type='text'
                    value={certificateText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCertificateText(e.target.value)
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
                  <S.AddCertificateIcon
                    onClick={() =>
                      certificateText.trim() !== '' &&
                      certificateDateText.trim() !== ''
                        ? openModal(
                            <CreateModal
                              question='자격증 정보를 추가하시겠습니까?'
                              title={certificateText}
                              onCreate={onCreate}
                              createText='추가하기'
                            />
                          )
                        : toast.info('자격증 정보를 입력해주세요')
                    }
                  >
                    <AddCertificate
                      color={
                        certificateText.trim() !== '' &&
                        certificateDateText.trim() !== ''
                          ? theme.color.main
                          : theme.color.gray['700']
                      }
                    />
                  </S.AddCertificateIcon>
                </S.AddCertificateBox>
              )}
              {certificateList?.data?.certifications.map((certificate, idx) => (
                <CertificateItem key={idx} certificateItems={certificate} />
              ))}
            </S.CertificateListBox>
          </S.CertificateBox>
        </S.CertificateContainer>
      </S.CertificateWrapper>
    </div>
  )
}

export default StudentPage
