import { Check, PeopleCircle } from '@bitgouel/common'
import { ChangeEvent } from 'react'
import * as S from './style'
import { DisplayBarSpan, RequestDisplayBar } from '../style'

interface Props {
  onAll: (e: ChangeEvent<HTMLInputElement>) => void
  onDeleteModal: () => void
}

const WithdrawDisplayInfo = ({ onAll, onDeleteModal }: Props) => {
  return (
    <S.WithdrawInfoContainer>
      <RequestDisplayBar>
        <div>
          <DisplayBarSpan width='1.75rem'>선택</DisplayBarSpan>
          <DisplayBarSpan width='6rem'>이름</DisplayBarSpan>
        </div>
      </RequestDisplayBar>
      <S.WithdrawButtonContainer>
        <S.AllWithdrawBox htmlFor='allUniversity'>
          <input type='checkbox' id='allUniversity' onChange={onAll} />
          <PeopleCircle />
          전체 선택
        </S.AllWithdrawBox>
        <S.SelectWithdrawBox onClick={onDeleteModal}>
          <Check />
          선택 탈퇴
        </S.SelectWithdrawBox>
      </S.WithdrawButtonContainer>
    </S.WithdrawInfoContainer>
  )
}

export default WithdrawDisplayInfo
