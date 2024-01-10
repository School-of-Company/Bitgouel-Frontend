'use client'

import * as S from './style'
import { useRouter } from 'next/navigation'
import {
  Bg2,
  CalendarIcon,
  PlusCertificate,
  PersonOut,
  AddCertificate,
} from '../../../assets'
import { ChangeEvent, useState } from 'react'
import { CreateModal, SelectCalendarModal } from '../../../modals'
import { useModal } from '../../../hooks'
import { theme } from '../../../styles'
import { toast } from 'react-toastify'

interface Certificate {
  id: number
  name: string
  acquisitionDate: string
  isModify: boolean
}

const StudentPage = () => {
  const { push } = useRouter()
  const [certificateList, setCertificateList] = useState<Certificate[]>([
    {
      id: 1,
      name: '정보처리기능사',
      acquisitionDate: '2023-02-16',
      isModify: false,
    },
    {
      id: 2,
      name: '컴퓨터활용능력 1급',
      acquisitionDate: '2023-02-16',
      isModify: false,
    },
    {
      id: 3,
      name: '정보기기운용기능사',
      acquisitionDate: '2023-02-16',
      isModify: false,
    },
  ])
  const [isAddCertificate, setIsAddCertificate] = useState<boolean>(false)
  const [certificateText, setCertificateText] = useState<string>('')
  const [isCertificateDate, setIsCertificateDate] = useState<boolean>(false)
  const [modifyText, setModifyText] = useState<string>('')
  const [modifyDateText, setModifyDateText] = useState<string>('')
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const [certificateDateText, setCertificateDateText] = useState<string>('')
  const { openModal, closeModal } = useModal()

  const onCreate = (id?: number) => {
    if (id) {
      setCertificateList((prev) => {
        const changedModify = prev.map((certificate) =>
          certificate.id === id
            ? {
                ...certificate,
                isModify: false,
                name: modifyText,
                acquisitionDate: modifyDateText,
              }
            : certificate
        )
        return changedModify
      })
    } else {
      setCertificateList((prev) => [
        ...prev,
        {
          id: 4,
          name: certificateText,
          acquisitionDate: certificateDateText,
          isModify: false,
        },
      ])
    }
    setCertificateText('')
    setCertificateDateText('')
    setIsAddCertificate(false)
    closeModal()
  }

  const onModify = (id: number, name: string, date: string) => {
    setCertificateList((prev) => {
      const changedModify = prev.map((certificate) =>
        certificate.id === id
          ? { ...certificate, isModify: true }
          : { ...certificate, isModify: false }
      )
      return changedModify
    })
    setModifyText(name)
    setModifyDateText(
      date
        .split('')
        .map((v) => (v === '-' ? '.' : v))
        .join('')
    )
  }

  const cancelModify = (id: number) => {
    setCertificateList((prev) => {
      const changedModify = prev.map((certificate) =>
        certificate.id === id
          ? { ...certificate, isModify: false }
          : certificate
      )
      return changedModify
    })
    setModifyText('')
    setModifyDateText('')
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
              <S.PlusCertificateIcon
                onClick={() => setIsAddCertificate((prev) => !prev)}
              >
                <PlusCertificate />
              </S.PlusCertificateIcon>
            </S.CertificatePlusBox>
            <S.CertificateListBox>
              {certificateList.map((certificate, idx) =>
                certificate.isModify ? (
                  <S.AddCertificateBox key={idx}>
                    <S.ListToggle list='추가' />
                    <S.AddCertificateInput
                      type='text'
                      value={modifyText}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setModifyText(e.target.value)
                      }
                    />
                    <S.AddCertificateDateBox>
                      <S.SelectDateContainer>
                        {isCertificateDate && (
                          <SelectCalendarModal
                            date={certificateDate}
                            setDate={setCertificateDate}
                            setText={setModifyDateText}
                          />
                        )}
                        <div
                          onClick={() => setIsCertificateDate((prev) => !prev)}
                        >
                          <CalendarIcon />
                        </div>
                      </S.SelectDateContainer>
                      <S.ShowDateText>{modifyDateText}</S.ShowDateText>
                    </S.AddCertificateDateBox>
                    <S.AddCertificateIcon
                      onClick={() =>
                        (modifyText !== '' &&
                          modifyDateText !== '' &&
                          certificate.name !== modifyText) ||
                        certificate.acquisitionDate
                          .split('')
                          .map((v) => (v === '-' ? '.' : v))
                          .join('') !== modifyDateText
                          ? openModal(
                              <CreateModal
                                question='자격증 정보를 수정하시겠습니까?'
                                title={modifyText}
                                onCreate={() => onCreate(certificate.id)}
                                createText='수정하기'
                              />
                            )
                          : certificate.name === modifyText &&
                            certificate.acquisitionDate
                              .split('')
                              .map((v) => (v === '-' ? '.' : v))
                              .join('') === modifyDateText &&
                            cancelModify(certificate.id)
                      }
                    >
                      <AddCertificate
                        color={
                          (modifyText !== '' &&
                            modifyDateText !== '' &&
                            certificate.name !== modifyText) ||
                          certificate.acquisitionDate
                            .split('')
                            .map((v) => (v === '-' ? '.' : v))
                            .join('') !== modifyDateText
                            ? theme.color.main
                            : theme.color.gray['700']
                        }
                      />
                    </S.AddCertificateIcon>
                  </S.AddCertificateBox>
                ) : (
                  <S.CertificateItemBox key={idx}>
                    <S.ListToggle list='추가됨' />
                    <span>{certificate.name}</span>
                    <span>
                      {certificate.acquisitionDate
                        .split('')
                        .map((v) => (v === '-' ? '.' : v))
                        .join('')}
                    </span>
                    <S.ModifyText
                      onClick={() =>
                        onModify(
                          certificate.id,
                          certificate.name,
                          certificate.acquisitionDate
                        )
                      }
                    >
                      수정하기
                    </S.ModifyText>
                  </S.CertificateItemBox>
                )
              )}
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
                      certificateText !== '' && certificateDateText !== ''
                        ? openModal(
                            <CreateModal
                              question='자격증 정보를 추가하시겠습니까?'
                              title={certificateText}
                              onCreate={() => onCreate()}
                              createText='추가하기'
                            />
                          )
                        : toast.info('자격증 정보를 입력해주세요')
                    }
                  >
                    <AddCertificate
                      color={
                        certificateText !== '' && certificateDateText !== ''
                          ? theme.color.main
                          : theme.color.gray['700']
                      }
                    />
                  </S.AddCertificateIcon>
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
