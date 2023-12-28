'use client'

import { useGetPostList } from '@bitgouel/api'
import Bg1 from '@bitgouel/common/src/assets/png/mainBg1.png'
import { Plus, Role } from '@bitgouel/common'
import { PostItem } from '@bitgouel/common/src/components'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'

const NotificationListPage = () => {
  const { push } = useRouter()
  const { data } = useGetPostList({
    type: 'NOTICE',
    size: 6,
    page: 0,
  })
  const role = useRecoilValue(Role)

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.NotificationTitle>공지 목록</S.NotificationTitle>
          <S.ButtonContainer>
            {role === 'ROLE_ADMIN' && (
              <S.NotificationButton
                onClick={() => push('/main/post/notification/create')}
              >
                <Plus />
                <span>공지 추가</span>
              </S.NotificationButton>
            )}
          </S.ButtonContainer>
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
