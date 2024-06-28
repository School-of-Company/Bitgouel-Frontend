'use client'

import { AddCertificate, DocumentIcon, Minus, People, Plus, theme } from '@bitgouel/common';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import * as S from './style';

interface ListType {
  title: string
  list: { icon: ReactNode; pageName: string; link: string }[]
}

const pageListData: ListType[] = [
  {
    title: '전체',
    list: [
      { icon: <People fill='gray' />, pageName: '사용자 명단', link: '/main/admin' },
      { icon: <Plus fill='gray' />, pageName: '신규 가입자 명단', link: '/main/admin/new' },
    ],
  },
  {
    title: '학생',
    list: [
      { icon: <Minus fill='gray' />, pageName: '탈퇴 예정자 명단', link: '/main/admin/withdraw' },
    ],
  },
  {
    title: '학교',
    list: [
      { icon: <DocumentIcon />, pageName: '등록된 학교 목록', link: '/main/admin/school' },
    ],
  },
  {
    title: '기업',
    list: [
      { icon: <DocumentIcon />, pageName: '등록된 기업 목록', link: '/main/admin/company' },
    ],
  },
]

const ListManagementContent = () => {
  const { push } = useRouter()
  const pathname = usePathname()

  return (
    <S.ListWrapper>
      {pageListData.map((page) => (
        <S.ListContainer key={page.title}>
          <S.ListTitle>{page.title}</S.ListTitle>
          {page.list.map((listItem) => (
            <S.ListContent key={listItem.pageName} onClick={() => push(listItem.link)}>
              <S.ContentTextBox>
                {listItem.icon}
                <span>{listItem.pageName}</span>
              </S.ContentTextBox>
              {pathname === listItem.link &&  <AddCertificate color={theme.color.main} />}
            </S.ListContent>
          ))}
        </S.ListContainer>
      ))}
    </S.ListWrapper>
  )
}

export default ListManagementContent
