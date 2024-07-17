import { ClubsType } from '@bitgouel/types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { clubQueryKeys, clubUrl, patch } from '@bitgouel/api'

export const usePatchClub = (
  id: string,
  options?: UseMutationOptions<
    void,
    AxiosError,
    Pick<ClubsType, 'clubName' | ('field' & { schoolId: string })>
  >
) =>
  useMutation<
    void,
    AxiosError,
    Pick<ClubsType, 'clubName' | ('field' & { schoolId: string })>
  >(
    clubQueryKeys.patchClub(id),
    (modifyValues) => patch(clubUrl.clubModify(id), modifyValues),
    options
  )
