'use client'
// 어드민 페이지
import { ClubItem, SchoolFilter } from '@/components'
import { useGetClubList } from '@bitgouel/api'
import { SchoolFilterText, schoolToConstants, useModal } from '@bitgouel/common'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from '../ClubPage/style'

const ClubPage = () => {
  const { openModal } = useModal()
  const schoolFilterText = useRecoilValue(SchoolFilterText)
  const { data, refetch } = useGetClubList(schoolToConstants[schoolFilterText])

  useEffect(() => {
    refetch()
  }, [schoolFilterText])

  return (
    <div>
      <SchoolFilter />
      <S.ClubWrapper>
        <S.ClubContainer>
          <S.ClubGroupBox>
            <S.ClubSchoolTitle>{schoolFilterText}</S.ClubSchoolTitle>
            <S.ClubListBox>
              {data?.data.clubs.map((club) => (
                <ClubItem key={club.id} clubId={club.id} clubName={club.name} />
              ))}
            </S.ClubListBox>
          </S.ClubGroupBox>
        </S.ClubContainer>
      </S.ClubWrapper>
    </div>
  )
}

export default ClubPage
