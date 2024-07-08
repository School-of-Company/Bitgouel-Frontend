import {
  ApproveStatusEnum,
  LectureDivisionEnum,
  LectureDivisionKor,
  LectureSemesterEnum,
  LectureSemesterKor,
  LectureTypeEnum,
  LectureTypeKor,
} from '@bitgouel/types'

export const lectureTypeToKor: Record<LectureTypeEnum, LectureTypeKor> = {
  MUTUAL_CREDIT_RECOGNITION_PROGRAM: '상호학점인정교육과정',
  UNIVERSITY_EXPLORATION_PROGRAM: '대학탐방프로그램',
}

export const lectureTypeToEnum: Record<LectureTypeKor, LectureTypeEnum> = {
  '상호학점인정교육과정': 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  '대학탐방프로그램': 'UNIVERSITY_EXPLORATION_PROGRAM',
}

export const lectureSemesterToKor: Record<
  Exclude<LectureSemesterEnum, 'NOT_APPLICABLE'>,
  LectureSemesterKor
> = {
  FIRST_YEAR_FALL_SEMESTER: '1학년 2학기',
  SECOND_YEAR_SPRING_SEMESTER: '2학년 1학기',
  SECOND_YEAR_FALL_SEMESTER: '2학년 2학기',
  THIRD_YEAR_SPRING_SEMESTER: '3학년 1학기',
}

export const lectureSemesterToEnum: Record<
  LectureSemesterKor,
  LectureSemesterEnum
> = {
  '1학년 2학기': 'FIRST_YEAR_FALL_SEMESTER',
  '2학년 1학기': 'SECOND_YEAR_FALL_SEMESTER',
  '2학년 2학기': 'SECOND_YEAR_SPRING_SEMESTER',
  '3학년 1학기': 'THIRD_YEAR_SPRING_SEMESTER',
}

export const lectureDivisionToKor: Record<
  LectureDivisionEnum,
  LectureDivisionKor
> = {
  AUTOMOBILE_INDUSTRY: '자동차 산업',
  ENERGY_INDUSTRY: '에너지 산업',
  MEDICAL_HEALTHCARE: '의료•헬스',
  AI_CONVERGENCE: 'AI 융•복합',
  CULTURAL_INDUSTRY: '문화 산업',
}

export const lectureDivisionToEnum: Record<
  LectureDivisionKor,
  LectureDivisionEnum
> = {
  '자동차 산업': 'AUTOMOBILE_INDUSTRY',
  '에너지 산업': 'ENERGY_INDUSTRY',
  '의료•헬스': 'MEDICAL_HEALTHCARE',
  'AI 융•복합': 'AI_CONVERGENCE',
  '문화 산업': 'CULTURAL_INDUSTRY',
}

export const lectureStatusToKor: Record<ApproveStatusEnum, string> = {
  PENDING: '승인 대기 중',
  APPROVED: '승인됨',
}
