import { ChangeEvent, useCallback } from 'react'

const useFileUpload = (upload) => {
  const onFileUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const excelFile: File | null = e.currentTarget.files
        ? e.currentTarget.files[0]
        : null

      const formData = new FormData()
      formData.append('file', excelFile ?? '')
      upload(formData)

      e.currentTarget.value = ''
    },
    [upload]
  )

  return { onFileUpload }
}

export default useFileUpload
