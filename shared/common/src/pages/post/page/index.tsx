'use client'

import {
  AuthorityContext,
  Bg1,
  MainStyle,
  MegaPhone,
  Plus,
  Question
} from '@bitgouel/common'
import { RoleEnumTypes } from '@bitgouel/types'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

const roleArray: RoleEnumTypes[] = [
  'ROLE_ADMIN',
  'ROLE_COMPANY_INSTRUCTOR',
  'ROLE_PROFESSOR',
  'ROLE_GOVERNMENT',
]

const PostList = dynamic(() => import('../../../components/ListComponents/PostList'))

const PostPage = () => {
  const [isRole, setIsRole] = useState<boolean>(false)
  const authority = useContext(AuthorityContext)
  const { push } = useRouter()

  useEffect(() => {
    setIsRole(roleArray.includes(authority))
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
        <PostList />
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default PostPage
