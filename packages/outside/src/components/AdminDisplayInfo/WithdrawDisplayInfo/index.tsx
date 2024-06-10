import { Check, FilterModal, FilterOut, PeopleCircle, useModal } from "@bitgouel/common"
import { FilterListTypes, onSelectedParameter } from "@bitgouel/types"
import { ChangeEvent } from "react"
import { RequestDisplayBar } from "../UserDisplayInfo/style"
import * as S from './style'

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
          <span>선택</span>
          <span>이름</span>
        </div>
        <span>직업</span>
        <span>전화번호</span>
        <span>이메일</span>
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