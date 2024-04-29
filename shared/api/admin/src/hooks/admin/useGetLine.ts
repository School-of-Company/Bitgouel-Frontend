import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'
import {
  LinePayloadTypes,
  LineResponseTypes
} from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useGetLines = (
  queryString: LinePayloadTypes,
  options?: UseQueryOptions<LineResponseTypes>
) =>
<<<<<<<< HEAD:shared/api/common/src/hooks/lecture/useGetLines.ts
  useQuery<AxiosResponse<LineResponseTypes>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getLines(),
========
  useQuery<LineResponseTypes, AxiosError>(
    lectureQueryKeys.getLine(),
>>>>>>>> develop:shared/api/admin/src/hooks/admin/useGetLine.ts
    () => get(lectureUrl.lectureLine(queryString)),
    options
  )
