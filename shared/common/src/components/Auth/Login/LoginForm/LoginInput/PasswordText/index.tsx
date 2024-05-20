'use client'

import { PasswordErrorText } from '@bitgouel/common'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const PasswordText = () => {
  const passwordErrorText = useRecoilValue(PasswordErrorText)

  return (
    <S.PasswordContainer>
      <S.MenuItem isError={!!passwordErrorText}>
        {passwordErrorText ? passwordErrorText : '비밀번호를 잊으셨나요?'}
      </S.MenuItem>
      <S.PasswordSearch>비밀번호 찾기</S.PasswordSearch>
    </S.PasswordContainer>
  )
}

export default PasswordText
