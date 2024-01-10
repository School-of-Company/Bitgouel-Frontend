'use client'

import { useGetPostList } from '@bitgouel/api'
import { Bg1 } from '@bitgouel/common'
import * as S from './style'
import { PostItem } from '@bitgouel/common/src/components'

const NotificationListPage = () => {
  const { data } = useGetPostList({
    type: 'NOTICE',
    size: 1,
    page: 1,
  })

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.NotificationTitle>공지 목록</S.NotificationTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.NotificationListWrapper>
        <S.NotificationListContainer>
          {data?.data.posts.content.map((notice) => (
            <PostItem key={notice.id} item={notice} />
          ))}
        </S.NotificationListContainer>
      </S.NotificationListWrapper>
    </div>
  )
}

export default NotificationListPage
