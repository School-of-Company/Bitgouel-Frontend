type questionTypes =
  | '수강 신청하시겠습니까?'
  | '강의를 개설하시겠습니까?'
  | '자격증 정보를 수정하시겠습니까?'
  | '자격증 정보를 추가하시겠습니까?'
  | '활동을 삭제하시겠습니까?'
  | '활동을 추가하시겠습니까?'
  | '활동 추가를 거부하시겠습니까?'
  | '활동 추가를 승인하시겠습니까?'
  | '공지사항을 추가하시겠습니까?'
  | '공지사항을 삭제하시겠습니까?'
  | '게시글을 추가하시겠습니까?'
  | '게시글을 삭제하시겠습니까?'
  | '게시글을 수정하시겠습니까?'
  | '문의하시겠습니까?'
  | '문의를 수정하시겠습니까?'
  | '문의를 삭제하시겠습니까?'
  | '문의를 답변하시겠습니까?'
  | '가입을 수락하시겠습니까?'
  | '가입을 거부하시겠습니까?'

type purposeTypes =
  | '추가하기'
  | '수정하기'
  | '승인하기'
  | '거부하기'
  | '삭제하기'
  | '문의하기'
  | '수락하기'
  | '개설하기'

export interface AppropriationModalProps {
  isApprove: boolean
  question: questionTypes
  title: string | undefined
  purpose: purposeTypes
  onAppropriation: () => void
}
