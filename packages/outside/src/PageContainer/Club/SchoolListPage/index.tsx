'use client'
// 어드민 페이지
import { ClubBanner, ClubItem } from '@outside/components'
import { useGetClubList } from '@bitgouel/api'
import {
  MainStyle,
  SchoolFilterText,
} from '@bitgouel/common'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from '../ClubPage/style'

const SchoolListPage = () => {
  const [isClient, setIsClient] = useState<boolean>(false)
  const schoolFilterText = useRecoilValue(SchoolFilterText)
  const { data, refetch } = useGetClubList(schoolFilterText)

  useEffect(() => {
    refetch()
    setIsClient(true)
  }, [schoolFilterText])

  return (
    isClient && (
      <MainStyle.PageWrapper>
        <ClubBanner />
        <MainStyle.MainWrapper>
          <MainStyle.MainContainer>
            <S.ClubSchoolTitle>{schoolFilterText}</S.ClubSchoolTitle>
            <S.ClubListWrapper>
              {data?.clubs && data.clubs.length <= 0
                ? '동아리가 존재하지 않습니다.'
                : data?.clubs.map((club) => (
                    <ClubItem
                      key={club.id}
                      clubId={club.id}
                      clubName={club.name}
                    />
                  ))}
            </S.ClubListWrapper>
          </MainStyle.MainContainer>
        </MainStyle.MainWrapper>
      </MainStyle.PageWrapper>
    )
  )
}

export default SchoolListPage
