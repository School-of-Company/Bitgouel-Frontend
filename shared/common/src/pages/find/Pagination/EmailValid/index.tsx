import { useEffect } from 'react'
import { useGetEmail } from '@bitgouel/api'
import * as S from './style'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { PwPage } from '@bitgouel/common'

const EmailValid = ({ emailValue }: { emailValue: string }) => {
  const setPwPage = useSetRecoilState(PwPage)
  const { data, refetch } = useGetEmail({ email: emailValue })

  useEffect(() => {
    const interval = setInterval(() => {
      refetch()
    }, 5000)

    return () => clearInterval(interval)
  }, [refetch])

  useEffect(() => {
    if (data?.data.isAuthentication) {
      setPwPage(3)
      toast.success('이메일 인증이 확인되었습니다')
    }
  }, [data, setPwPage])

  return (
    <>
      <S.EmailInputContainer>
        <S.EmailValue>{emailValue} 로</S.EmailValue>
        <S.Title>확인 이메일 발송됨</S.Title>
      </S.EmailInputContainer>
    </>
  )
}

export default EmailValid
