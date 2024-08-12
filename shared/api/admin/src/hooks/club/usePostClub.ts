import { clubQueryKeys, clubUrl, post } from '@bitgouel/api'
import { FieldEnumType } from '@bitgouel/types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface CreateClubValues {
  name: string
  field: FieldEnumType
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
