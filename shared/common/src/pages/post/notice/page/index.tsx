'use client'

import { TokenManager, useGetPostList } from '@bitgouel/api'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { Bg1, Plus } from '../../../../assets'
import { PostItem } from '../../../../components'

const NoticePage = () => {
  const { data } = useGetPostList({
    type: 'NOTICE',
    size: 10,
    page: 1,
  })
  const tokenManager = new TokenManager()
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.NoticeTitle>공지 목록</S.NoticeTitle>
          {tokenManager.authority === 'ROLE_ADMIN' && (
            <S.ButtonContainer>
              <S.NoticeButton
                onClick={() => push('/main/post/notice/create')}
              >
                <Plus />
                <span>공지 추가</span>
              </S.NoticeButton>
            </S.ButtonContainer>
          )}
        </S.BgContainer>
      </S.SlideBg>
      <S.NoticeListWrapper>
        <S.NoticeListContainer>
          {data?.data.posts.content.map((notice) => (
            <PostItem key={notice.id} item={notice} />
          ))}
        </S.NoticeListContainer>
      </S.NoticeListWrapper>
    </div>
  )
}

export default NoticePage
