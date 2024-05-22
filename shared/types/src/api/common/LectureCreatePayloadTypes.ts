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

export type LectureDivisionEnum =
  | 'AUTOMOBILE_INDUSTRY'
  | 'ENERGY_INDUSTRY'
  | 'MEDICAL_HEALTHCARE'
  | 'AI_CONVERGENCE'
  | 'CULTURAL_INDUSTRY'

export type LectureDivisionKor =
  | '자동차 산업'
  | '에너지 산업'
  | '의료•헬스'
  | 'AI 융•복합'
  | '문화 산업'

export interface LectureDate {
  completeDate: string // LocalDate 날짜만
  startTime: string // LocalTime 시간만
  endTime: string // LocalTime 시간만
}

export interface LectureCreatePayloadTypes {
  name: string
  content: string
  semester: LectureSemesterEnum
  division: string
  department: string
  line: string
  userId: string
  startDate: string // LocalDateTime 날짜 + 시간
  endDate: string // LocalDateTime 날짜 + 시간
  lectureDates: LectureDate[]
  lectureType: string
  credit: number
  maxRegisteredUser: number
  essentialComplete: boolean
}
