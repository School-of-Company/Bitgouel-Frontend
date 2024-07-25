import { clubQueryKeys, clubUrl, patch, post } from '@bitgouel/api'
import { FieldEnum } from '@bitgouel/types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface CreateClubValues {
  name: string
  field: FieldEnum
}

export const usePostClub = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, CreateClubValues>
) =>
  useMutation<void, AxiosError, CreateClubValues>(
    clubQueryKeys.postClub(id),
    (createValues) => post(clubUrl.clubCreate(id), createValues),
    options
  )
