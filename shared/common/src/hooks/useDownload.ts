'use client'

import { TokenManager, useGetLectureExcel } from '@bitgouel/api'
import { saveAs } from 'file-saver'

const useDownload = ({
  fileName,
  fileTypes,
  isClick,
}: {
  fileName: '강의 신청 결과'
  fileTypes: 'xlsx'
  isClick: boolean
}) => {
  const tokenMaanger = new TokenManager()
  const { data } = useGetLectureExcel({
    enabled: tokenMaanger.authority === 'ROLE_ADMIN' && isClick,
  })
  const excelDown = () => {
    const fileBlob: Blob = new Blob([data || ''], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    saveAs(fileBlob, `${fileName}.${fileTypes}`)
  }

  return { excelDown }
}

export default useDownload
