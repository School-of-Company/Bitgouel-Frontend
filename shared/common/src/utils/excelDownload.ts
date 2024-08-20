import { saveAs } from 'file-saver'
import { toast } from 'react-toastify'

interface Parameter {
  data: unknown
  fileName: string
  fileExtension: 'xlsx'
}

const fileTypes = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
}

const excelDownload = ({ data, fileName, fileExtension }: Parameter) => {
  if (data instanceof Blob) {
    const fileBlob: Blob = new Blob([data], {
      type: fileTypes[fileExtension],
    })
    saveAs(fileBlob, `${fileName}.${fileExtension}`)
  }
}

export default excelDownload
