'use client'

import * as S from './style'
import { usePathname, useRouter } from 'next/navigation'
import { match } from 'ts-pattern'

const PostItem = () => {
  const { push } = useRouter()
  const pathname = usePathname()

  return (
    <S.PostItem
      onClick={() =>
        push(
          match(pathname)
            .with('/main/post', () => '/main/post/detail')
            .otherwise(() => '/main/post/notification/detail')
        )
      }
    >
      <div>
        <S.PostTitle>마이다스 IT 기업탐방</S.PostTitle>
      </div>
      <div>
        <S.PostDate>2023년 11월 11일</S.PostDate>
      </div>
    </S.PostItem>
  )
}
export default PostItem
