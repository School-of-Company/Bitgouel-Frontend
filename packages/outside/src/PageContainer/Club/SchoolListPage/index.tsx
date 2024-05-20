'use client'
// 어드민 페이지
import { ClubItem, SchoolFilter } from '@/components'
import { useGetClubList } from '@bitgouel/api'
import {
  MainStyle,
  SchoolFilterText,
  schoolToConstants,
} from '@bitgouel/common'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from '../ClubPage/style'

const SchoolListPage = () => {
  const schoolFilterText = useRecoilValue(SchoolFilterText)
  const { data, refetch } = useGetClubList(schoolToConstants[schoolFilterText])

  useEffect(() => {
    refetch()
  }, [schoolFilterText])

  return (
    <MainStyle.PageWrapper>
      <SchoolFilter />
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          <S.ClubSchoolTitle>{schoolFilterText}</S.ClubSchoolTitle>
          <S.ClubListWrapper>
            {data?.clubs.map((club) => (
              <ClubItem key={club.id} clubId={club.id} clubName={club.name} />
            ))}
          </S.ClubListWrapper>
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default SchoolListPage
