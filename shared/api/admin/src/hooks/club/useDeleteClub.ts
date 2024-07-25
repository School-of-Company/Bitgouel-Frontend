import { clubQueryKeys, clubUrl, del } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useDeleteClub = (id: string, options?: UseMutationOptions) =>
  useMutation<void, AxiosError>(
    clubQueryKeys.deleteClub(id),
    () => del(clubUrl.clubDelete(id)),
    options
  )
