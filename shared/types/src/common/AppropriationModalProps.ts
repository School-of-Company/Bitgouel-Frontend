export interface AppropriationModalProps { 
  type: '강의 개설' | '활동 추가' | '공지사항' | '게시글' | '문의'
  purpose?: '거절' | '삭제'
  title: string | undefined
  onAppropriation: () => void
}

