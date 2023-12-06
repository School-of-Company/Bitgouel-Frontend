'use client'

import * as S from './style'
import { usePathname, useRouter } from 'next/navigation'
import { match } from 'ts-pattern'

const NoticeItem = () => {
  const { push } = useRouter()
  const pathname = usePathname()

  return (
    <S.NoticeItem
      onClick={() =>
        push(
          match(pathname)
            .with('/main/notice', () => '/main/notice/detail')
            .otherwise(() => '/main/notice/notification/detail')
        )
      }
    >
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
