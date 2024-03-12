import {
  ApproveStatusEnum,
  LectureSessionEnum,
  LectureSessionKor,
  LectureTypeEnum,
  LectureTypeKor,
} from '@bitgouel/types'

export const lectureTypeToKor: Record<LectureTypeEnum, LectureTypeKor> = {
  MUTUAL_CREDIT_RECOGNITION_PROGRAM: '상호학점인정교육과정',
  UNIVERSITY_EXPLORATION_PROGRAM: '대학탐방프로그램',
}

export const lectureTypeToEnum: Record<LectureTypeKor, LectureTypeEnum> = {
  상호학점인정교육과정: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  대학탐방프로그램: 'UNIVERSITY_EXPLORATION_PROGRAM',
}

export const lectureSessionToKor: Record<
  LectureSessionEnum,
  LectureSessionKor
> = {
  FIRST_YEAR_FALL_SEMESTER: '1학년 2학기',
  SECOND_YEAR_SPRING_SEMESTER: '2학년 1학기',
  SECOND_YEAR_FALL_SEMESTER: '2학년 2학기',
  THIRD_YEAR_SPRING_SEMESTER: '3학년 1학기',
}

export const lectureSessionToEnum: Record<
  LectureSessionKor,
  LectureSessionEnum
> = {
  '1학년 2학기': 'FIRST_YEAR_FALL_SEMESTER',
  '2학년 1학기': 'SECOND_YEAR_FALL_SEMESTER',
  '2학년 2학기': 'SECOND_YEAR_SPRING_SEMESTER',
  '3학년 1학기': 'THIRD_YEAR_SPRING_SEMESTER',
}

export const lectureStatusToKor: Record<ApproveStatusEnum, string> = {
  PENDING: '승인 대기 중',
  APPROVED: '승인됨',
}
