'use client'

import { useGetPostList } from '@bitgouel/api'
import {
  Bg1,
  Message,
  Plus,
  PostItem,
  Question,
  MainStyle,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'

const NoticePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const { data } = useGetPostList({
    type: 'NOTICE',
    page: 0,
    size: 10,
  })
  const { push } = useRouter()

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg1}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>공지사항</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push(`/main/post`)}>
              <Message />
              <span>게시글</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton onClick={() => push(`/main/post/inquiry`)}>
              <Question />
              <span>문의사항</span>
            </MainStyle.SlideButton>
            {isAdmin && (
              <MainStyle.SlideButton onClick={() => push('/main/post/notice/create')}>
                <Plus />
                <span>공지 추가</span>
              </MainStyle.SlideButton>
            )}
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          {data?.posts.content.map((notice) => (
            <PostItem key={notice.id} item={notice} />
          ))}
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default NoticePage
