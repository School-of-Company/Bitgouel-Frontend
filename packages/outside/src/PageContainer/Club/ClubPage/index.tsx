'use client'
// 어드민 페이지
import { ClubItem, SchoolFilter } from '@/components'
import { useGetSchoolClubList } from '@bitgouel/api'
import { SchoolFilterText, useModal } from '@bitgouel/common'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const ClubPage = () => {
  const { openModal } = useModal()
  const schoolFilterText = useRecoilValue(SchoolFilterText)
  const { data, refetch } = useGetSchoolClubList()

  useEffect(() => {
    refetch()
  }, [schoolFilterText])

  return (
    <>
      <SchoolFilter />
      <S.ClubWrapper>
        <S.ClubContainer>
          {data?.schools.map((school) => (
            <S.ClubGroupBox key={school.id}>
              <S.ClubSchoolTitle>{school.schoolName}</S.ClubSchoolTitle>
              <S.ClubListBox>
                {school.clubs.map((club) => (
                  <ClubItem
                    key={club.id}
                    clubId={club.id}
                    clubName={club.name}
                  />
                ))}
              </S.ClubListBox>
            </S.ClubGroupBox>
          ))}
        </S.ClubContainer>
      </S.ClubWrapper>
    </>
  )
}

export default ClubPage
