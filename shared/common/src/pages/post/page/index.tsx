'use client'

import { TokenManager, useGetPostList } from '@bitgouel/api'
import { Bg1, MegaPhone, Plus, PostItem, Question } from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as S from './style'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_PROFESSOR',
  'ROLE_GOVERNMENT',
]

const PostPage = () => {
  const { data } = useGetPostList({
    type: 'EMPLOYMENT',
    page: 0,
    size: 15,
  })
  const { posts } = data?.data || {}
  const { push } = useRouter()
  const tokenManager = new TokenManager()
  const [isRole, setIsRole] = useState<boolean>(false)

  useEffect(() => {
    setIsRole(roleArray.includes(tokenManager.authority) ? true : false)
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
            {isRole && (
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
          {posts?.content.map((post) => (
            <PostItem key={post.id} item={post} />
          ))}
        </S.PostListContainer>
      </S.PostListWrapper>
    </div>
  )
}

export default PostPage
