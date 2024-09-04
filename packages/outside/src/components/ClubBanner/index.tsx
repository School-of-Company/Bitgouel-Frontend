'use client'

import { useGetClubExcel, usePostClubExcelUpload } from '@bitgouel/api'
import {
  Bg2,
  excelDownload,
  handleErrorStatus,
  ListDocumentIcon,
  MainStyle,
  PrintIcon,
  SettingOut,
  useFileUpload,
  useModal,
} from '@bitgouel/common'
import { ScrollListModal } from '@outside/modals'
import { toast } from 'react-toastify'
import SchoolContent from '../SchoolContent'

const errorStatusMap: { [key: number]: () => void } = {
  400: () => toast.error('유효하지 않은 동아리 분야입니다.'),
  404: () => toast.error('셀에 존재하지 않는 학교가 기재되어 있습니다.'),
  409: () => toast.error('이미 등록된 동아리가 셀에 기재되어 있습니다.'),
}

const ClubBanner = () => {
  const { openModal } = useModal()
  const { refetch } = useGetClubExcel({
    enabled: false,
  })

  const onDownload = async () => {
    try {
      const response = await refetch()
      if (response.error) throw response.error

      excelDownload({
        data: response.data,
        fileName: '동아리 현황',
        fileExtension: 'xlsx',
      })
    } catch (e) {
      if (e.response.status === 404)
        toast.error('취업 동아리 선생님이 배정되지 않았습니다')
    }
  }

  const { mutate: upload } = usePostClubExcelUpload({
    onSuccess: () => toast.success('동아리 정보 일괄 삽입을 성공했습니다.'),
    onError: ({ response }) =>
      response && handleErrorStatus(response.status, errorStatusMap),
  })

  const { onFileUpload } = useFileUpload(upload)

  return (
    <MainStyle.SlideBg url={Bg2}>
      <MainStyle.BgContainer>
        <MainStyle.PageTitle>취업 동아리 목록</MainStyle.PageTitle>
        <MainStyle.ButtonContainer>
          <MainStyle.SlideButton onClick={onDownload}>
            <PrintIcon />
            <span>동아리 현황 출력</span>
          </MainStyle.SlideButton>
          <MainStyle.FileUploadLabel htmlFor='clubUpload'>
            <input
              id='clubUpload'
              type='file'
              accept='.xlsx, .xls, csv'
              onChange={onFileUpload}
            />
            <ListDocumentIcon />
            <span>동아리 정보 일괄 삽입</span>
          </MainStyle.FileUploadLabel>
          <MainStyle.SlideButton
            onClick={() =>
              openModal(
                <ScrollListModal
                  title='학교 선택'
                  children={<SchoolContent />}
                />
              )
            }
          >
            <SettingOut />
            <span>학교 선택</span>
          </MainStyle.SlideButton>
        </MainStyle.ButtonContainer>
      </MainStyle.BgContainer>
    </MainStyle.SlideBg>
  )
}

export default ClubBanner
