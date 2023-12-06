'use client'

import * as S from './style'
import { useRouter } from 'next/navigation'

const NoticeItem = () => {
  const router = useRouter()

  return (
    <S.NoticeItem onClick={() => router.push('/main/notice/detail')}>
      <div>
        <S.NoticeTitle>마이다스 IT 기업탐방</S.NoticeTitle>
      </div>
      <div>
        <S.NoticeDate>2023년 11월 11일</S.NoticeDate>
      </div>
    </S.NoticeItem>
  )
}
export default NoticeItem
