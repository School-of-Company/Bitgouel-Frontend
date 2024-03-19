import { useEffect } from 'react'
import { useGetEmail } from '@bitgouel/api'
import * as S from './style'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { PwPage } from '@bitgouel/common'

const NumberValid = ({ emailValue }: { emailValue: string }) => {
  const setPwPage = useSetRecoilState(PwPage)
  const { data, refetch } = useGetEmail({ email: emailValue })

  useEffect(() => {
    const timer = setTimeout(() => refetch(), 5000)
    if (data?.data.isAuthentication) {
      setPwPage(4)
      toast.success('이메일 인증이 확인되셨습니다')
    }
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <S.EmailInputContainer>
        <S.EmailValue>{emailValue} 로</S.EmailValue>
        <S.Title>확인 이메일 발송됨</S.Title>
      </S.EmailInputContainer>
    </>
  )
}

export default NumberValid
