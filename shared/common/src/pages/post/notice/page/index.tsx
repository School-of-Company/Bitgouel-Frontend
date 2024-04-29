'use client'

import { useGetPostList } from '@bitgouel/api'
import { Bg1, Message, Plus, PostItem, Question } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import * as S from './style'

const NoticePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const { data } = useGetPostList({
    type: 'NOTICE',
    page: 0,
    size: 10,
  })
  const { push } = useRouter()

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.NoticeTitle>공지사항</S.NoticeTitle>
          <S.ButtonContainer>
            <S.NoticeButton onClick={() => push(`/main/post`)}>
              <Message />
              <span>게시글</span>
            </S.NoticeButton>
            <S.NoticeButton onClick={() => push(`/main/post/inquiry`)}>
              <Question />
              <span>문의사항</span>
            </S.NoticeButton>
            {isAdmin && (
              <S.NoticeButton onClick={() => push('/main/post/notice/create')}>
                <Plus />
                <span>공지 추가</span>
              </S.NoticeButton>
            )}
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.NoticeListWrapper>
        <S.NoticeListContainer>
          {data?.posts.content.map((notice) => (
            <PostItem key={notice.id} item={notice} />
          ))}
        </S.NoticeListContainer>
      </S.NoticeListWrapper>
    </div>
  )
}

export default NoticePage
