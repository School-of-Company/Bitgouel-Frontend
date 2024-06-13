'use client'
// 어드민 페이지
import { ClubBanner, ClubItem } from '@/components'
import { useGetSchoolClubList } from '@bitgouel/api'
import { MainStyle, SchoolFilterText, WaitingAnimation } from '@bitgouel/common'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const ClubPage = () => {
  const schoolFilterText = useRecoilValue(SchoolFilterText)
  const { data, refetch, isLoading } = useGetSchoolClubList()

  useEffect(() => {
    refetch()
  }, [schoolFilterText])

  return (
    <MainStyle.PageWrapper>
      <ClubBanner />
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          {isLoading && <WaitingAnimation title={'취업 동아리 목록을'} />}
          {data?.schools.map((school) => (
            <MainStyle.MainContainer key={school.id}>
              <S.ClubSchoolTitle>{school.schoolName}</S.ClubSchoolTitle>
              <S.ClubListWrapper>
                {school?.clubs && school.clubs.length <= 0 ? (
                  <S.NoneClubMessage>
                    동아리가 존재하지 않는 학교입니다.
                  </S.NoneClubMessage>
                ) : (
                  school.clubs.map((club) => (
                    <ClubItem
                      key={club.id}
                      clubId={club.id}
                      clubName={club.name}
                    />
                  ))
                )}
              </S.ClubListWrapper>
            </MainStyle.MainContainer>
          ))}
        </MainStyle.MainContainer>
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default ClubPage
