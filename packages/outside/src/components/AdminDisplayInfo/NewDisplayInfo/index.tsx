import { Check, PeopleCircle } from "@bitgouel/common"
import { ChangeEvent } from "react"
import { RequestDisplayBar } from "../UserDisplayInfo/style"
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
          <span>선택</span>
          <span>이름</span>
        </div>
        <span>직업</span>
        <span>전화번호</span>
        <span>이메일</span>
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