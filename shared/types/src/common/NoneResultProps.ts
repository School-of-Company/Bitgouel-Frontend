export type NotDataTitle =
  | '신규 가입자 명단이'
  | '탈퇴 예정자 명단이'
  | '사용자 목록이'
  | '문의 목록이'
  | '강의 신청자가'
  | '강의 목록이'
  | '공지사항이'
  | '게시글 목록이'
  | '학생 활동이'
  | '동아리 인원이'
  | '대학 명단이'
  | '기업 명단이'

export interface NoneResultProps {
  title: NotDataTitle
}
