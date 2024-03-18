import { ApiErrorTypes, LinePayloadTypes, LineResponseTypes } from '@bitgouel/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { get, lectureQueryKeys, lectureUrl } from '../../common'

export const useGetLine = (
  queryString: LinePayloadTypes,
  options?: UseQueryOptions<AxiosResponse>
) =>
  useQuery<AxiosResponse<LineResponseTypes>, AxiosError<ApiErrorTypes>>(
    lectureQueryKeys.getLine(),
    () => get(lectureUrl.lectureLine(queryString)),
    options
  )
