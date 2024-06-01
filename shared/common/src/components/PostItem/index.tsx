'use client'

import { PostItemTypes } from '@bitgouel/types'
import dayjs from 'dayjs'
import { usePathname, useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import * as S from './style'

const PostItem = ({ item }: { item: PostItemTypes }) => {
  const { push } = useRouter()
  const pathname = usePathname()

  return (
    <S.PostItem
      onClick={() =>
        push(
          match(pathname)
            .with('/main/post', () => `/main/post/detail/${item.id}`)
            .otherwise(() => `/main/post/notice/detail/${item.id}`)
        )
      }
    >
      <div>
        <S.PostTitle>{item.title}</S.PostTitle>
      </div>
      <div>
        <S.PostDate>
          {dayjs(item.modifiedAt).format('YYYY년 MM월 DD일 HH:mm')}
        </S.PostDate>
      </div>
    </S.PostItem>
  )
}

export default PostItem
