import {
  CancelIcon,
  LectureLine,
  LectureType,
  Portal,
  useModal,
} from '@bitgouel/common'
import { useRecoilState } from 'recoil'
import * as S from './style'

const lectureTypes: ['상호학점인정교육과정', '대학탐방프로그램'] = [
  '상호학점인정교육과정',
  '대학탐방프로그램',
]

const lectureLines: [
  '기계',
  '자동차',
  '전기•전자',
  '생명화학공학',
  '뷰티',
  '의료•헬스',
  '드론'
] = ['기계', '자동차', '전기•전자', '생명화학공학', '뷰티', '의료•헬스', '드론']

const LectureTypeSelect = () => {
  const [lectureType, setLectureType] = useRecoilState(LectureType)
  return (
    <S.EnumSelectContainer>
      {lectureTypes.map((type) => (
        <S.EnumBox
          key={type}
          current={type}
          selected={lectureType}
          onClick={() => setLectureType(type)}
        >
          <span>{type}</span>
        </S.EnumBox>
      ))}
    </S.EnumSelectContainer>
  )
}

const LectureLineSelect = () => {
  const [lectureLine, setLectureLine] = useRecoilState(LectureLine)
  return (
    <S.EnumSelectContainer>
      {lectureLines.map((line) => (
        <S.EnumBox
          key={line}
          current={line}
          selected={lectureLine}
          onClick={() => setLectureLine(line)}
        >
          <span>{line}</span>
        </S.EnumBox>
      ))}
    </S.EnumSelectContainer>
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
      </S.LectureSettingModalWrapper>
    </Portal>
  )
}

export default LectureSettingModal
