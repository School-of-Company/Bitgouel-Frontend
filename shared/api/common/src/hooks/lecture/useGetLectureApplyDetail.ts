import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { get, lectureQueryKeys, lectureUrl } from '@bitgouel/api'

export type CompleteStatus =
  | 'NOT_COMPLETED_YET'
  | 'COMPLETED_IN_3RD'
  | 'COMPLETED_IN_2RD'
  | 'COMPLETED_IN_1RD'

interface ResponseType {
  email: string
  name: string
  grade: number
  classNumber: number
  number: number
  phoneNumber: string
  school: string
  clubName: string
  cohort: number
  currentCompletedDate: string
  completeStatus: CompleteStatus
}

export const useGetLectureApplyDetail = (
  lectureId: string,
  studentId: string,
  options?: UseQueryOptions<ResponseType, AxiosError>
) =>
  useQuery<ResponseType, AxiosError>(
    lectureQueryKeys.getApplyDetail(lectureId, studentId),
    () => get(lectureUrl.lectureApplyDetail(lectureId, studentId)),
    options
  )
