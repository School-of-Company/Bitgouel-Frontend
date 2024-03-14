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

export interface LectureCreatePayloadTypes {
  name: string
  content: string
}
