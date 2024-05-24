'use client'

import { TokenManager, useGetPostList } from '@bitgouel/api'
import {
  Bg1,
  MainStyle,
  MegaPhone,
  Plus,
  PostItem,
  Question,
} from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_PROFESSOR',
  'ROLE_GOVERNMENT',
]

const PostPage = () => {
  const [isRole, setIsRole] = useState<boolean>(false)
  const tokenManager = new TokenManager()
  const { push } = useRouter()

  const [postSequence, setPostSequence] = useState<number>(0)
  const { data, refetch } = useGetPostList({
    type: 'EMPLOYMENT',
    postSequence,
    size: 10,
  })
  const {scrollTarget, list: postList } = useIntersectionObserver({length: data?.posts.length, listData: data?.posts, setSequence: setPostSequence})

  useEffect(() => {
    refetch()
  }, [postSequence])

  useEffect(() => {
    setIsRole(
      tokenManager.authority
        ? roleArray.includes(tokenManager.authority)
        : false
    )
  }, [])

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg1}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>게시글</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            <MainStyle.SlideButton onClick={() => push('/main/post/notice')}>
              <MegaPhone />
              <span>공지사항</span>
            </MainStyle.SlideButton>
            <MainStyle.SlideButton onClick={() => push('/main/post/inquiry')}>
              <Question />
              <span>문의사항</span>
            </MainStyle.SlideButton>
            {isRole && (
              <MainStyle.SlideButton onClick={() => push('/main/post/create')}>
                <Plus />
                <span>게시글 추가</span>
              </MainStyle.SlideButton>
            )}
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          {postList.map((post) => (
            <PostItem key={post.id} item={post} />
          ))}
        </MainStyle.MainContainer>
        <div
          ref={scrollTarget}
          style={{
            width: '100%',
            height: 30,
            background: 'red',
            marginTop: '5rem',
          }}
        />
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default PostPage
