import { saveAs } from 'file-saver'
import { toast } from 'react-toastify'

interface Parameter {
  data: any
  fileName: string
  fileExtension: 'xlsx'
}

const fileTypes = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
}

const excelDownload = ({ data, fileName, fileExtension }: Parameter) => {
  if (!data) return toast.error('다운로드 버튼을 다시 눌러주세요.')
    
  const fileBlob: Blob = new Blob([data], {
    type: fileTypes[fileExtension],
  })
  saveAs(fileBlob, `${fileName}.${fileExtension}`)
}

export default excelDownload
