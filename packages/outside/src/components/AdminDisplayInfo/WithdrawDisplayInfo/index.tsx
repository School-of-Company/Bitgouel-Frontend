import {
  Check,
  FilterModal,
  FilterOut,
  PeopleCircle,
  useModal,
} from '@bitgouel/common'
import { FilterListTypes, onSelectedParameter } from '@bitgouel/types'
import { ChangeEvent } from 'react'
import * as S from './style'
import { DisplayBarSpan, RequestDisplayBar } from '../style'

interface Props {
  filterTitle: string
  filterList: FilterListTypes[]
  onSelected: (parameter: onSelectedParameter) => void
  onAll: (e: ChangeEvent<HTMLInputElement>) => void
  onWithdrawModal: () => void
}

const WithdrawDisplayInfo = ({
  filterTitle,
  filterList,
  onSelected,
  onAll,
  onWithdrawModal,
}: Props) => {
  const { openModal } = useModal()

  return (
    <S.WithdrawInfoContainer>
      <RequestDisplayBar>
        <div>
          <DisplayBarSpan width='1.75rem'>선택</DisplayBarSpan>
          <DisplayBarSpan width='6rem'>이름</DisplayBarSpan>
        </div>
        <DisplayBarSpan width='8.25rem'>직업</DisplayBarSpan>
        <DisplayBarSpan width='9rem'>전화번호</DisplayBarSpan>
        <DisplayBarSpan width='auto'>이메일</DisplayBarSpan>
      </RequestDisplayBar>
      <S.WithdrawButtonContainer>
        <S.FilterBox
          onClick={() =>
            openModal(
              <FilterModal
                title={filterTitle}
                filterList={filterList}
                onSelected={onSelected}
              />
            )
          }
        >
          <FilterOut />
          필터
        </S.FilterBox>
        <S.AllWithdrawBox htmlFor='allWithdraw'>
          <input type='checkbox' id='allWithdraw' onChange={onAll} />
          <PeopleCircle />
          전체 선택
        </S.AllWithdrawBox>
        <S.SelectWithdrawBox onClick={onWithdrawModal}>
          <Check />
          선택 탈퇴
        </S.SelectWithdrawBox>
      </S.WithdrawButtonContainer>
    </S.WithdrawInfoContainer>
  )
}

export default WithdrawDisplayInfo
