import { RoleEnumTypes, AuthorityKorTypes } from '@bitgouel/types'

export const authorityToKor: Record<RoleEnumTypes, AuthorityKorTypes> = {
  ROLE_ADMIN: '관리자',
  ROLE_STUDENT: '학생',
  ROLE_TEACHER: '선생님',
  ROLE_PROFESSOR: '교수님',
  ROLE_GOVERNMENT: '유관기관',
  ROLE_COMPANY_INSTRUCTOR: '기업강사',
  ROLE_BBOZZAK: '뽀짝 선생님',
}
