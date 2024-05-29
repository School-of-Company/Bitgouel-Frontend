'use client'

import { TokenManager, useGetPostList } from '@bitgouel/api'
import {
  Bg1,
  MainStyle,
  MegaPhone,
  Plus,
  PostItem,
  Question,
  useIntersectionObserver,
} from '@bitgouel/common'
import { PostItemTypes, RoleEnumTypes } from '@bitgouel/types'
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
  const [isRole, setIsRole] = useState<boolean>(false)
  const tokenManager = new TokenManager()
  const { push } = useRouter()
  const [postSequence, setPostSequence] = useState<number | null>(null)
  const { data, refetch } = useGetPostList({
    type: 'EMPLOYMENT',
    postSequence,
    size: 10,
  })
  const [postList, setPostList] = useState<PostItemTypes[]>([])
  const [scrollTarget] = useIntersectionObserver({
    listData: data?.posts || [],
    setSequence: setPostSequence,
    setList: setPostList,
  })

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
        <S.ObserverLine ref={scrollTarget} />
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default PostPage
