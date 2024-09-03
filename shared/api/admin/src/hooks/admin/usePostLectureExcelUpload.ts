import { adminQueryKeys, adminUrl, post } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { formDataHeader } from './usePostStudentExcelUpload'

export const usePostLectureExcelUpload = (
  options?: UseMutationOptions<void, AxiosError, FormData>
) =>
  useMutation<void, AxiosError, FormData>(
    adminQueryKeys.postLectureExcelUpload(),
    (lectureFormData) =>
      post(adminUrl.lectureExcelDownload(), lectureFormData, formDataHeader),
    options
  )
