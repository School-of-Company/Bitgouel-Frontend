export interface AppropriationModalProps {
  type: '강의 개설' | '활동 추가' | '공지사항' | '게시글'
  title: string | undefined
  onAppropriation: () => void
}
