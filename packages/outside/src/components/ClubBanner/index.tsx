'use client'

import { useGetClubExcel } from '@bitgouel/api'
import {
  Bg2,
  excelDownload,
  MainStyle,
  PrintIcon,
  SettingOut,
  useModal,
} from '@bitgouel/common'
import { ScrollListModal } from '@outside/modals'
import { toast } from 'react-toastify'
import SchoolContent from '../SchoolContent'

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

  return (
    <MainStyle.SlideBg url={Bg2}>
      <MainStyle.BgContainer>
        <MainStyle.PageTitle>취업 동아리 목록</MainStyle.PageTitle>
        <MainStyle.ButtonContainer>
          <MainStyle.SlideButton onClick={}>
            <PrintIcon />
            <span>동아리 현황 출력</span>
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
