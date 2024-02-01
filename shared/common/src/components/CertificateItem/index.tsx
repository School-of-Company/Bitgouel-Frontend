import { ChangeEvent, useState } from 'react'
import * as S from './style'
import { usePostCertificate, usePatchModifyCertificate } from '@bitgouel/api'
import { Certificate, CertificateRequest } from '@bitgouel/types'
import { AddCertificate, CalendarIcon } from '../../assets'
import { useModal } from '../../hooks'
import { CreateModal, SelectCalendarModal } from '../../modals'
import { theme } from '../../styles'
import { useRecoilValue } from 'recoil'
import { toast } from 'react-toastify'

interface CertificateProps {
  certificateItems: Certificate
  isAddCertificate: boolean
}

const CertificateItem: React.FC<CertificateProps> = ({
  certificateItems,
  isAddCertificate,
}) => {
  const { id, name, acquisitionDate } = certificateItems
  const { mutate } = usePatchModifyCertificate(id)

  const [isCertificateDate, setIsCertificateDate] = useState<boolean>(false)
  const [modifyText, setModifyText] = useState<string>(certificateItems.name)
  const [modifyDateText, setModifyDateText] = useState<string>(
    certificateItems.acquisitionDate
  )
  const [certificateDate, setCertificateDate] = useState<Date>(new Date())
  const { openModal, closeModal } = useModal()

  const [isModify, setIsModify] = useState<boolean>(false)

  const onModify = () => {
    const payload: CertificateRequest = {
      name: modifyText,
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
    <>
      {isModify ? (
        <S.AddCertificateBox>
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
                  setText={(value) => {
                    setModifyDateText(value)
                  }}
                />
              )}
              <div onClick={() => setIsCertificateDate((prev) => !prev)}>
                <CalendarIcon />
              </div>
            </S.SelectDateContainer>
            <S.ShowDateText>{modifyDateText}</S.ShowDateText>
          </S.AddCertificateDateBox>
          <S.AddCertificateIcon
            onClick={() =>
              (modifyText.trim() !== '' &&
                modifyDateText.trim() !== '' &&
                name !== modifyText) ||
              acquisitionDate
                .split('')
                .map((v) => (v === '-' ? '.' : v))
                .join('') !== modifyDateText
                ? openModal(
                    <CreateModal
                      question='자격증 정보를 수정하시겠습니까?'
                      title={modifyText}
                      onCreate={onModify}
                      createText='수정하기'
                    />
                  )
                : name === modifyText &&
                  acquisitionDate
                    .split('')
                    .map((v) => (v === '-' ? '.' : v))
                    .join('') === modifyDateText
            }
          >
            <AddCertificate
              color={
                (modifyText.trim() !== '' &&
                  modifyDateText.trim() !== '' &&
                  name !== modifyText) ||
                acquisitionDate
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
        <S.CertificateItemBox id={id}>
          <S.ListToggle list='추가됨' />
          <span>{name}</span>
          <span>
            {acquisitionDate
              .split('')
              .map((v) => (v === '-' ? '.' : v))
              .join('')}
          </span>
          <S.ModifyText onClick={() => setIsModify(true)}>
            수정하기
          </S.ModifyText>
        </S.CertificateItemBox>
      )}
    </>
  )
}

export default CertificateItem
