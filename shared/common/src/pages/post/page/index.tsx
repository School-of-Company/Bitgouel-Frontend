'use client'

import { TokenManager, useGetPostList } from '@bitgouel/api'
import { useRouter } from 'next/navigation'
import { Bg1, MegaPhone, Plus, Question } from '../../../assets'
import { PostItem } from '../../../components'
import * as S from './style'
import { useEffect, useState } from 'react'

const PostPage = () => {
  const { data } = useGetPostList({
    type: 'EMPLOYMENT',
    page: 0,
    size: 15,
  })
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const [postAuth, setPostAuth] = useState<boolean>(false)

  useEffect(() => {
    if (
      tokenManager.authority === 'ROLE_ADMIN' ||
      tokenManager.authority === 'ROLE_PROFESSOR' ||
      tokenManager.authority === 'ROLE_COMPANY_INSTRUCTOR' ||
      tokenManager.authority === 'ROLE_GOVERNMENT'
    )
      setPostAuth(true)
    else setPostAuth(false)
  }, [])

  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.PostTitle>게시글</S.PostTitle>
          <S.ButtonContainer>
            <S.PostButton onClick={() => push('/main/post/notice')}>
              <MegaPhone />
              <span>공지사항</span>
            </S.PostButton>
            <S.PostButton onClick={() => push('/main/post/inquiry')}>
              <Question />
              <span>문의사항</span>
            </S.PostButton>
            {postAuth && (
              <S.PostButton onClick={() => push('/main/post/create')}>
                <Plus />
                <span>게시글 추가</span>
              </S.PostButton>
            )}
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.PostListWrapper>
        <S.PostListContainer>
          {data?.data.posts.content.map((post) => (
            <PostItem key={post.id} item={post} />
          ))}
        </S.PostListContainer>
      </S.PostListWrapper>
    </div>
  )
}

export default PostPage
