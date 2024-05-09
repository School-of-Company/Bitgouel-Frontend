import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, post } from '@bitgouel/api'
import { AxiosError } from 'axios'

const formDataHeader = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}

export const usePostExcelUpload = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, FormData>
) =>
  useMutation<void, AxiosError, FormData>(
    adminQueryKeys.postExcelUpload(id),
    (userDates) => post(adminUrl.excelUpload(id), userDates, formDataHeader),
    options
  )
