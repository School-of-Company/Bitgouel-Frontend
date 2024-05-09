import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { adminQueryKeys, adminUrl, post } from '@bitgouel/api'
import { AxiosError } from 'axios'

const formDataHeader = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}

export const usePostExcelUpload = (
  options?: UseMutationOptions<void, AxiosError, FormData>
) =>
  useMutation<void, AxiosError, FormData>(
    adminQueryKeys.postExcelUpload(),
    (userDatas) => post(adminUrl.excelUpload(), userDatas, formDataHeader),
    options
  )
