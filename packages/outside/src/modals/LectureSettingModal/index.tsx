'use client'

import {
  CancelIcon,
  LectureEndDate,
  LectureStartDate,
  Portal,
  useModal
} from '@bitgouel/common'
import {
  LocalizationProvider,
  StaticDateRangePicker,
} from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { useSetRecoilState } from 'recoil'
import LectureLineSelect from './LectureLineSelect'
import LectureMaxInput from './LectureMaxInput'
import LectureTypeSelect from './LectureTypeSelect'
import SearchProfessor from './SearchProfessor'
import ShowEnrollmentTime from './ShowEnrollment'
import * as S from './style'

const LectureEnrollmentDate = () => {
  const setStartDate = useSetRecoilState(LectureStartDate)
  const setEndDate = useSetRecoilState(LectureEndDate)

  const onDateChange = (datePick) => {
    const start = new Date(datePick[0])
    const end = new Date(datePick[1])
    setStartDate(() => [
      start.getFullYear(),
      start.getMonth() + 1,
      start.getDate(),
    ])
    setEndDate(() => [end.getFullYear(), end.getMonth() + 1, end.getDate()])
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['StaticDateRangePicker']}>
        <DemoItem component='StaticDateRangePicker'>
          <StaticDateRangePicker onChange={onDateChange} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}

const LectureSettingModal = () => {
  const { closeModal } = useModal()

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
          <span>강의 계열</span>
          <LectureLineSelect />
        </S.SettingContainer>
        <S.SettingContainer>
          <span>강의 신청 기간</span>
          <S.EnrollmentDateBox>
            <LectureEnrollmentDate />
            <ShowEnrollmentTime />
          </S.EnrollmentDateBox>
        </S.SettingContainer>
        <S.SettingContainer>
          <span>담당 교수</span>
          <SearchProfessor />
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
