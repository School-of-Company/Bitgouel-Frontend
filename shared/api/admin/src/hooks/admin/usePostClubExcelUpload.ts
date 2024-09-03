import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { adminQueryKeys, adminUrl, formDataHeader, post } from '@bitgouel/api'

export const usePostClubExcelUpload = (
  options?: UseMutationOptions<void, AxiosError, FormData>
) =>
  useMutation<void, AxiosError, FormData>(
    adminQueryKeys.postClubExcelUpload(),
    (clubFormData) =>
      post(adminUrl.clubExcelUpload(), clubFormData, formDataHeader),
    options
  )
