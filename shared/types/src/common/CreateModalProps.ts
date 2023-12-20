export interface CreateModalProps {
  question:
    | '강의를 개설하시겠습니까?'
    | '활동을 추가하시겠습니까?'
    | '활동을 수정하시겠습니까?'
  title: string
  onCreate: () => void
  createText: '개설하기' | '추가하기' | '수정하기'
}
