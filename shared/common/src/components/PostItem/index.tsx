'use client'

import { usePathname, useRouter } from 'next/navigation'
import { match } from 'ts-pattern'
import * as S from './style'
import { PostItemTypes } from '@bitgouel/types'

const PostItem = ({ item }: { item: PostItemTypes }) => {
  const { push } = useRouter()
  const pathname = usePathname()

  return (
    <S.PostItem
      onClick={() =>
        push(
          match(pathname)
            .with('/main/post', () => `/main/post/${item.id}`)
            .otherwise(() => `/main/post/notice/${item.id}`)
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
