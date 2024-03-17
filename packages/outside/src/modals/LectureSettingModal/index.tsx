'use client'

import { CancelIcon, LectureType, Portal, useModal } from '@bitgouel/common'
import { useRecoilValue } from 'recoil'
import LectureApplyTime from './LectureApplyTime'
import LectureDivisionSelect from './LectureDivisonSelect'
import LectureEnrollmentDates from './LectureEnrollmentDates'
import LectureMaxInput from './LectureMaxInput'
import LectureSemesterSelect from './LectureSemesterSelect'
import LectureTypeSelect from './LectureTypeSelect'
import SearchDepartment from './SearchDepartment'
import SearchLine from './SearchLine'
import SearchProfessor from './SearchProfessor'
import * as S from './style'

const LectureSettingModal = () => {
  const { closeModal } = useModal()
  const lectureType = useRecoilValue(LectureType)

  return (
    <Portal onClose={closeModal}>
      <S.LectureSettingModalWrapper>
        <S.SettingTitleBox>
          <h3>강의 세부 설정</h3>
          <CancelIcon onClick={closeModal} />
        </S.SettingTitleBox>
        <S.SettingContainer>
          <span>강의 유형</span>
          <LectureTypeSelect />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>수강 학기</span>
          <LectureSemesterSelect />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>강의 구분</span>
          <LectureDivisionSelect />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>강의 계열</span>
          <SearchLine />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>강의 학과</span>
          <SearchDepartment />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>담당 교수</span>
          <SearchProfessor />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>강의 신청 기간</span>
          <LectureApplyTime />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>강의 수강일</span>
          <LectureEnrollmentDates />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>모집 인원</span>
          <LectureMaxInput />
        </S.SettingContainer>
      </S.LectureSettingModalWrapper>
    </Portal>
  )
}

export default LectureSettingModal
