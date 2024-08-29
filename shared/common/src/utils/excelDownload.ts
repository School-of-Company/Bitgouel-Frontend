import { toast } from 'react-toastify'
import { saveAs } from 'file-saver'

declare global {
  interface Window {
    showSaveFilePicker?: (
      options?: SaveFilePickerOptions
    ) => Promise<FileSystemFileHandle>
  }

  interface FileSystemWritableFileStream extends WritableStream {
    write(data: any): Promise<void>
    close(): Promise<void>
  }

  interface FileSystemFileHandle {
    createWritable(
      options?: FileSystemCreateWritableOptions
    ): Promise<FileSystemWritableFileStream>
  }

  interface FileSystemCreateWritableOptions {
    keepExistingData?: boolean
  }
}

interface SaveFilePickerOptions {
  suggestedName?: string
  types?: Array<{
    description: string
    accept: Record<string, string[]>
  }>
}

interface Params {
  data: unknown
  fileName: string
  fileExtension: 'xlsx'
}

const FILE_TYPES = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
} as const

const isAbortError = (error: unknown): boolean =>
  error instanceof Error && error.name === 'AbortError'

const createFileBlob = (
  data: Blob,
  fileExtension: keyof typeof FILE_TYPES
): Blob => new Blob([data], { type: FILE_TYPES[fileExtension] })

const getFullFileName = (fileName: string, fileExtension: string): string =>
  `${fileName}.${fileExtension}`

const isShowSaveFilePickerSupported = (
  win: Window & typeof globalThis
): win is Window &
  typeof globalThis & {
    showSaveFilePicker: NonNullable<Window['showSaveFilePicker']>
  } => typeof win.showSaveFilePicker === 'function'

const saveWithFileSystemAPI = async (
  fileBlob: Blob,
  fullFileName: string,
  fileExtension: string
): Promise<void> => {
  if (!isShowSaveFilePickerSupported(window)) {
    throw new Error('showSaveFilePicker is not supported')
  }

  const handle = await window.showSaveFilePicker({
    suggestedName: fullFileName,
    types: [
      {
        description: 'Excel 파일',
        accept: {
          [FILE_TYPES[fileExtension as keyof typeof FILE_TYPES]]: [
            `.${fileExtension}`,
          ],
        },
      },
    ],
  })

  const writable = await handle.createWritable()
  await writable.write(fileBlob)
  await writable.close()

  toast.success('파일이 성공적으로 저장되었습니다.')
}

const excelDownload = async ({
  data,
  fileName,
  fileExtension,
}: Params): Promise<void> => {
  if (!(data instanceof Blob)) {
    toast.error('유효하지 않은 데이터 형식입니다.')
    return
  }

  const fileBlob = createFileBlob(data, fileExtension)
  const fullFileName = getFullFileName(fileName, fileExtension)

  try {
    if (isShowSaveFilePickerSupported(window)) {
      await saveWithFileSystemAPI(fileBlob, fullFileName, fileExtension)
    } else {
      saveAs(fileBlob, fullFileName)
      toast.success('파일 다운로드가 시작되었습니다.')
    }
  } catch (error) {
    if (!isAbortError(error)) {
      toast.error('파일 저장 중 오류가 발생했습니다.')
      console.error('파일 저장 오류:', error)
    }
  }
}

export default excelDownload
