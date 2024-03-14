import { LectureDivisionEnum } from "./LinePayloadTypes"

export type LectureTypeEnum =
  | 'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
  | 'UNIVERSITY_EXPLORATION_PROGRAM'

export type LectureTypeKor = '상호학점인정교육과정' | '대학탐방프로그램'

export type LectureSemesterEnum =
  | 'FIRST_YEAR_FALL_SEMESTER'
  | 'SECOND_YEAR_SPRING_SEMESTER'
  | 'SECOND_YEAR_FALL_SEMESTER'
  | 'THIRD_YEAR_SPRING_SEMESTER'

export type LectureSemesterKor =
  | '1학년 2학기'
  | '2학년 1학기'
  | '2학년 2학기'
  | '3학년 1학기'

interface LectureDate {
  completeDate: string // LocalDate 날짜만
  startTime: string // LocalTime 시간만
  endDate: string // LocalTime 시간만
}

export interface LectureCreatePayloadTypes {
  name: string
  content: string
  semester: LectureSemesterEnum
  division: LectureDivisionEnum
  department: string
  line: string
  userId: string
  startDate: string // LocalDateTime 날짜 + 시간
  endDate: string // LocalDateTime 날짜 + 시간
  lectureDates: LectureDate[]
  lectureType: LectureTypeEnum
  credit: number
  maxRegisteredUser: number
}
