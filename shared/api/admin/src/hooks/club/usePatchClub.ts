import { clubQueryKeys, clubUrl, patch } from '@bitgouel/api'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { CreateClubValues } from './usePostClub'

export interface ModifyClubValues extends CreateClubValues {
  schoolId: string
}

export const usePatchClub = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, ModifyClubValues>
) =>
  useMutation<void, AxiosError, ModifyClubValues>(
    clubQueryKeys.patchClub(id),
    (modifyValues) => patch(clubUrl.clubModify(id), modifyValues),
    options
  )
