import { del, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteLecture = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError, void>(
    lectureQueryKeys.deleteLecture(id),
    () => del(lectureUrl.lectureDelete(id)),
    options
  )