'use client'

import { TokenManager, useGetLectureExcel } from '@bitgouel/api'
import { saveAs } from 'file-saver'

// 추후 다른 파일 다운로드가 생길 시 대비 custom hooks
const useDownload = ({
  fileName,
  fileTypes,
}: {
  fileName: '강의 신청 결과'
  fileTypes: 'xlsx'
}) => {
  let fileBlob: Blob
  const tokenMaanger = new TokenManager()
  const { data } = useGetLectureExcel({
    enabled: tokenMaanger.authority === 'ROLE_ADMIN',
  })
  const excelDown = () => {
    fileBlob = new Blob([data?.data || ''], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    saveAs(fileBlob, `${fileName}.${fileTypes}`)
  }

  return { excelDown }
}

export default useDownload
