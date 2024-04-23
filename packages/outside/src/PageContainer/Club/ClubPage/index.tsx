'use client'
// 어드민 페이지
import { ClubItem } from '@/components'
import { SchoolFilterModal } from '@/modals'
import { useGetSchoolClubList } from '@bitgouel/api'
import { Bg2, SchoolFilterText, SettingOut, useModal } from '@bitgouel/common'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const ClubPage = () => {
  const { openModal } = useModal()
  const schoolFilterText = useRecoilValue(SchoolFilterText)
  const { data, refetch } = useGetSchoolClubList()
  // const { data: clubList, refetch } = useGetClubList(
  //   schoolToConstants[schoolFilterText]
  // )

  useEffect(() => {
    refetch()
  }, [schoolFilterText])

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.Title>취업 동아리 목록</S.Title>
          <S.ButtonContainer>
            <S.ClubButton onClick={() => openModal(<SchoolFilterModal />)}>
              <SettingOut />
              <span>학교 선택</span>
            </S.ClubButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.ClubWrapper>
        <S.ClubContainer>
          {data?.data.schools.map((school) => (
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
    </div>
  )
}

export default ClubPage
