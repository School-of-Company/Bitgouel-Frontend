'use client'
// 어드민 페이지
import { ClubItem } from '@/components'
import * as S from './style'
import { Bg2 } from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useGetClubList, useGetSchoolClubList } from '@bitgouel/api'
import {
  SchoolFilterText,
  SettingOut,
  schoolToConstants,
  useModal,
} from '@bitgouel/common'
import SchoolFilterModal from '@/modals/SchoolFilterModal'
import { useRecoilValue } from 'recoil'
import { useEffect } from 'react'

const ClubPage = () => {
  const { push } = useRouter()
  const { openModal } = useModal()
  const schoolFilterText = useRecoilValue(SchoolFilterText)
  const { data, refetch } = schoolFilterText.length
    ? useGetClubList(schoolToConstants[schoolFilterText])
    : useGetSchoolClubList()

  useEffect(() => {
    refetch()
  }, [schoolFilterText])

  return (
    <div>
      <S.SlideBg url={ Bg2 }>
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
          <S.ClubGroupBox>
            <S.ClubSchoolTitle>
              광주소프트웨어마이스터고등학교
            </S.ClubSchoolTitle>
            <S.ClubListBox>
              <ClubItem />
            </S.ClubListBox>
          </S.ClubGroupBox>
        </S.ClubContainer>
      </S.ClubWrapper>
    </div>
  )
}

export default ClubPage
