'use client'

import {
  Bg2,
  ListDocumentIcon,
  MainStyle,
  PrintIcon,
  SettingOut,
  useFileUpload,
  useModal,
} from '@bitgouel/common'
import { ScrollListModal } from '@outside/modals'
import SchoolContent from '../SchoolContent'
import { usePostClubExcelUpload } from '@bitgouel/api'
import { toast } from 'react-toastify'

const ClubBanner = () => {
  const { openModal } = useModal()
  const { mutate: upload } = usePostClubExcelUpload({
    onSuccess: () => toast.success('동아리 정보 일괄 삽입을 성공했습니다.'),
    onError: ({ response }) => toast.error('오류'),
  })

  const { onFileUpload } = useFileUpload(upload)

  return (
    <MainStyle.SlideBg url={Bg2}>
      <MainStyle.BgContainer>
        <MainStyle.PageTitle>취업 동아리 목록</MainStyle.PageTitle>
        <MainStyle.ButtonContainer>
          <MainStyle.SlideButton>
            <input
              type='file'
              accept='.xlsx, .xls, csv'
              onChange={onFileUpload}
            />
            <ListDocumentIcon />
            <span>동아리 정보 일괄 삽입</span>
          </MainStyle.SlideButton>
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
