import { LectureTypeEnum } from '@bitgouel/types'

export const lectureToKor: Record<LectureTypeEnum, string> = {
  MUTUAL_CREDIT_RECOGNITION_PROGRAM: '상호학점인정교육과정',
  UNIVERSITY_EXPLORATION_PROGRAM: '대학탐방프로그램',
}

export const lectureToEnum: Record<string, LectureTypeEnum> = {
  상호학점인정교육과정: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  대학탐방프로그램: 'UNIVERSITY_EXPLORATION_PROGRAM',
}

export const lectureStatusToKor: Record<string, string> = {
  PENDING: '승인 대기 중',
  APPROVED: '승인됨',
}
