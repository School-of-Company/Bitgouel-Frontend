'use client'

import * as S from './style'

const NewUserItem = () => {
  return (
    <S.NewUserItem>
      <S.CheckBox type='checkbox'></S.CheckBox>
      <div>
        <S.Name>홍길동피닉스</S.Name>
      </div>
      <div>
        <S.Role>학생</S.Role>
      </div>
    </S.NewUserItem>
  )
}

export default NewUserItem
