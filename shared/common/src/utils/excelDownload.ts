import { saveAs } from 'file-saver'

interface Parameter {
  data: any
  fileName: string
  fileExtension: 'xlsx'
}

const fileTypes = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
}

const excelDownload = ({ data, fileName, fileExtension }: Parameter) => {
  const fileBlob: Blob = new Blob([data || ''], {
    type: fileTypes[fileExtension],
  })
  saveAs(fileBlob, `${fileName}.${fileExtension}`)
}

export default excelDownload
