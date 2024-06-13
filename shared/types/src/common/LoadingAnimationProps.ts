export type isLoadingTitleTypes =
  | '신규 가입자 명단을'
  | '탈퇴 예정자 명단을'
  | '사용자 목록을'
  | '취업 동아리 목록을'
  | '문의 목록을'
  | '강의 신청자를'
  | '강의 목록을'
  | '공지사항을'
  | '게시글 목록을'
  | '학생 활동을'
  | '동아리 인원을'

export interface LoadingAnimationProps {
  title: isLoadingTitleTypes
}
