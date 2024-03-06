import { LectureLineEnum, LectureTypeEnum } from '@bitgouel/types'

export const lectureTypeToKor: Record<LectureTypeEnum, string> = {
  MUTUAL_CREDIT_RECOGNITION_PROGRAM: '상호학점인정교육과정',
  UNIVERSITY_EXPLORATION_PROGRAM: '대학탐방프로그램',
}

export const lectureLineToKor: Record<LectureLineEnum, string> = {
  기계: '기계',
  자동차: '자동차',
  전기전자: '전기•전자',
  생명화학공학: '생명화학공학',
  뷰티: '뷰티',
  의료헬스: '의료•헬스',
  드론: '드론',
}

export const lectureToEnum: Record<string, LectureTypeEnum> = {
  상호학점인정교육과정: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  대학탐방프로그램: 'UNIVERSITY_EXPLORATION_PROGRAM',
}

export const lectureStatusToKor: Record<string, string> = {
  PENDING: '승인 대기 중',
  APPROVED: '승인됨',
}
