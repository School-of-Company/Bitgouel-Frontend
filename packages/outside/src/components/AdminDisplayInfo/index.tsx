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

interface NewDisplayBarProps {
  onAll: (e: ChangeEvent<HTMLInputElement>) => void
  handleOpenModal: (type: 'approve' | 'reject') => void
}

interface WithdrawDisplayBarProps {
  filterTitle: string
  filterList: FilterListTypes[]
  onSelected: (parameter: onSelectedParameter) => void
  onAll: (e: ChangeEvent<HTMLInputElement>) => void
  onWithdrawModal: () => void
}

const AdminDisplayInfo = () => {
  return (
    <S.DisplayBar>
      <span>이름</span>
      <span>직업</span>
      <span>전화번호</span>
      <span>이메일</span>
    </S.DisplayBar>
  )
}

const NewDisplayTop = ({ onAll, handleOpenModal }: NewDisplayBarProps) => {
  return (
    <S.NewTopContainer>
      <S.RequestDisplayBar>
        <div>
          <span>선택</span>
          <span>이름</span>
        </div>
        <span>직업</span>
        <span>전화번호</span>
        <span>이메일</span>
      </S.RequestDisplayBar>
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
    </S.NewTopContainer>
  )
}

const WithdrawDisplayTop = ({
  filterTitle,
  filterList,
  onSelected,
  onAll,
  onWithdrawModal,
}: WithdrawDisplayBarProps) => {
  const { openModal } = useModal()
  
  return (
    <S.WithdrawTopContainer>
      <S.RequestDisplayBar>
        <div>
          <span>선택</span>
          <span>이름</span>
        </div>
        <span>직업</span>
        <span>전화번호</span>
        <span>이메일</span>
      </S.RequestDisplayBar>
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
    </S.WithdrawTopContainer>
  )
}

AdminDisplayInfo.NewDisplayTop = NewDisplayTop
AdminDisplayInfo.WithdrawDisplayTop = WithdrawDisplayTop

export default AdminDisplayInfo
