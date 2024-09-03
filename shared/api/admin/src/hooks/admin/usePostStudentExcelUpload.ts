import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, post } from '@bitgouel/api'
import { AxiosError } from 'axios'

export const formDataHeader = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Content-Disposition': 'attachment;filename=file.xlsx',
  },
}

export const usePostStudentExcelUpload = (
  options?: UseMutationOptions<void, AxiosError, FormData>
) =>
  useMutation<void, AxiosError, FormData>(
    adminQueryKeys.postStudentExcelUpload(),
    (studentFormData) =>
      post(adminUrl.studentExcelUpload(), studentFormData, formDataHeader),
    options
  )
