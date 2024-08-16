import { Check, PeopleCircle } from "@bitgouel/common"
import { ChangeEvent } from "react"
import * as S from './style'

interface Props {
  onAll: (e: ChangeEvent<HTMLInputElement>) => void
  handleOpenModal: () => void
}

const CompleteDisplayInfo = ({ onAll, handleOpenModal }: Props) => {
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
        <S.AllSelectBox htmlFor='allComplete'>
          <input type='checkbox' id='allComplete' onChange={onAll} />
          <PeopleCircle />
          전체 선택
        </S.AllSelectBox>
        <S.ApplyButton isCancel={true} onClick={handleOpenModal}>
          <Check />
          학생 이수 취소
        </S.ApplyButton>
      </S.SelectBoxContainer>
    </S.ApplyDisplayContainer>
  )
}

export default CompleteDisplayInfo