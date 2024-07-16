import { patch, schoolQueryKeys, schoolUrl } from '@bitgouel/api'
import { SchoolModifyBodyTypes } from '@bitgouel/types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const usePatchSchool = (
  id: string,
  options?: UseMutationOptions<void, AxiosError, SchoolModifyBodyTypes>
) =>
  useMutation<void, AxiosError, SchoolModifyBodyTypes>(
    schoolQueryKeys.patchSchool(id),
    (modifyValues) => patch(schoolUrl.schoolModify(id), modifyValues),
    options
  )
