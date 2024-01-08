'use client'

import { PostItemProps } from '@bitgouel/types'
import * as S from './style'
import { usePathname, useRouter } from 'next/navigation'
import { match } from 'ts-pattern'

const PostItem = ({ item }: PostItemProps) => {
  const { push } = useRouter()
  const pathname = usePathname()

  return (
    <S.PostItem
      onClick={() =>
        push(
          match(pathname)
            .with('/main/post', () => `/main/post/${item.id}`)
            .otherwise(() => `/main/post/notification/${item.id}`)
        )
      }
    >
      <div>
        <S.PostTitle>{item.title}</S.PostTitle>
      </div>
      <div>
        <S.PostDate>{`${item.modifiedAt.slice(0, 4)}년 ${item.modifiedAt.slice(
          5,
          7
        )}월 ${item.modifiedAt.slice(8, 10)}일 ${item.modifiedAt.slice(
          11,
          16
        )}`}</S.PostDate>
      </div>
    </S.PostItem>
  )
}

export default PostItem
