import { del, schoolQueryKeys, schoolUrl } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteSchool = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError>(
    schoolQueryKeys.deleteSchool(id),
    () => del(schoolUrl.schoolDelete(id)),
    options
  )