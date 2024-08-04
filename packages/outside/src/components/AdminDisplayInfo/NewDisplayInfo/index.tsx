import { Check, PeopleCircle } from "@bitgouel/common"
import { ChangeEvent } from "react"
import { DisplayBarSpan, RequestDisplayBar } from "../style"
import * as S from './style'

interface Props {
  onAll: (e: ChangeEvent<HTMLInputElement>) => void
  handleOpenModal: (type: 'approve' | 'reject') => void
}

const NewDisplayInfo = ({ onAll, handleOpenModal }: Props) => {
  return (
    <S.NewInfoContainer>
      <RequestDisplayBar>
        <div>
          <DisplayBarSpan width="1.75rem">선택</DisplayBarSpan>
          <DisplayBarSpan width="6rem">이름</DisplayBarSpan>
        </div>
        <DisplayBarSpan width="8.25rem">직업</DisplayBarSpan>
        <DisplayBarSpan width="9rem">전화번호</DisplayBarSpan>
        <DisplayBarSpan width="auto">이메일</DisplayBarSpan>
      </RequestDisplayBar>
      <S.SelectBoxContainer>
        <S.SelectBox type='allNew' htmlFor='allNew'>
          <input type='checkbox' id='allNew' onChange={onAll} />
          <PeopleCircle />
          전체 선택
        </S.SelectBox>
        <S.SelectBox type='approve' onClick={() => handleOpenModal('approve')}>
          <Check />
          선택 수락
        </S.SelectBox>
        <S.SelectBox type='reject' onClick={() => handleOpenModal('reject')}>
          <Check />
          선택 거절
        </S.SelectBox>
      </S.SelectBoxContainer>
    </S.NewInfoContainer>
  )
}

export default NewDisplayInfo