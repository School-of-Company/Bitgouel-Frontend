'use client'
// 어드민 페이지
import { ClubItem, SchoolFilter } from '@/components'
import { useGetSchoolClubList } from '@bitgouel/api'
import { SchoolFilterText } from '@bitgouel/common'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { MainStyle } from '@bitgouel/common'
import * as S from './style'

const ClubPage = () => {
  const schoolFilterText = useRecoilValue(SchoolFilterText)
  const { data, refetch } = useGetSchoolClubList()

  useEffect(() => {
    refetch()
  }, [schoolFilterText])

  return (
    <MainStyle.PageWrapper>
      <SchoolFilter />
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          {data?.schools.map((school) => (
            <S.ClubContainer key={school.id}>
              <S.ClubSchoolTitle>{school.schoolName}</S.ClubSchoolTitle>
              <S.ClubListWrapper>
                {school.clubs.map((club) => (
                  <ClubItem
                    key={club.id}
                    clubId={club.id}
                    clubName={club.name}
                  />
                ))}
              </S.ClubListWrapper>
            </S.ClubContainer>
          ))}
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default ClubPage
