import { Check, PeopleCircle } from "@bitgouel/common"
import { ChangeEvent } from "react"
import * as S from './style'

interface Props {
  onAll: (e: ChangeEvent<HTMLInputElement>) => void
  handleOpenModal: () => void
}

const ApplyDisplayInfo = ({ onAll, handleOpenModal }: Props) => {
  return (
    <S.ApplyDisplayContainer>
      <S.DisplayBar>
        <div>
          <S.DisplayBarSpan width="1.75rem">선택</S.DisplayBarSpan>
          <S.DisplayBarSpan width="6rem">이름</S.DisplayBarSpan>
        </div>
        <S.DisplayBarSpan width="15rem">학교</S.DisplayBarSpan>
        <S.DisplayBarSpan width="5rem">학년/반</S.DisplayBarSpan>
        <S.DisplayBarSpan width="auto">동아리</S.DisplayBarSpan>
      </S.DisplayBar>
      <S.SelectBoxContainer>
        <S.AllSelectBox htmlFor='allNew'>
          <input type='checkbox' id='allNew' onChange={onAll} />
          <PeopleCircle />
          전체 선택
        </S.AllSelectBox>
        <S.ApplyButton onClick={() => handleOpenModal()}>
          <Check />
          강의 이수 확정
        </S.ApplyButton>
      </S.SelectBoxContainer>
    </S.ApplyDisplayContainer>
  )
}

export default ApplyDisplayInfo