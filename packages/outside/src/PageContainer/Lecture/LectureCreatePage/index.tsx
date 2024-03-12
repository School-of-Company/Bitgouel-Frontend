'use client'

import { Bg3, FilterOut, LectureEndDate, LectureEndTime, LectureSession, LectureMax, LectureProfessor, LectureStartDate, LectureType, useModal } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import * as S from './style'
import { useRecoilState, useRecoilValue } from 'recoil'
import { LectureSettingModal } from '@/modals'

const LectureCreatePage = () => {
  const MAXLENGTH: number = 1000 as const
  const [lectureTitle, setLectureTitle] = useState<string>('')
  const [lectureContent, setLectureContent] = useState<string>('')
  const lectureType = useRecoilValue(LectureType)
  const lectureSession = useRecoilValue(LectureSession)
  const lectureStartDate = useRecoilValue(LectureStartDate)
  const lectureStartTime = useRecoilValue(LectureStartDate)
  const lectureEndDate = useRecoilValue(LectureEndDate)
  const lectureEndTime = useRecoilValue(LectureEndTime)
  const lectureProfessor = useRecoilValue(LectureProfessor)
  const lectureMax = useRecoilValue(LectureMax)
  const {openModal} = useModal()

  // const onCreate = () =>
  //   mutate({
  //     name: lectureTitle,
  //     content: lectureContent,
  //     startDate: handleLocalDateTime(startDate, startDateText),
  //     endDate: handleLocalDateTime(endDate, endDateText),
  //     completeDate: handleLocalDateTime(completeDate, completeDateText),
  //     lectureType: lectureToEnum[lectureTypeText],
  //     credit:
  //       lectureTypeText === '대학탐방프로그램' ? 0 : +scoreText.slice(0, 1),
  //     maxRegisteredUser: people,
  //   })

  // const onCreateModal = () => {
  //   if (
  //     lectureTitle !== '' &&
  //     lectureContent !== '' &&
  //     lectureTypeText !== '강의 유형 선택' &&
  //     startDateText !== '신청 시작일 선택' &&
  //     endDateText !== '신청 마감일 선택' &&
  //     completeDateText !== '강의 시작일 선택' &&
  //     lectureTypeText !== '대학탐방프로그램'
  //       ? scoreText !== '학점 선택'
  //       : true && people !== 0
  //   )
  //     openModal(
  //       <AppropriationModal
  //         isApprove={true}
  //         question='강의를 개설하시겠습니까?'
  //         title={lectureTitle}
  //         purpose='개설하기'
  //         onAppropriation={() => onCreate()}
  //       />
  //     )
  // }

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.CreateTitle>강의 개설</S.CreateTitle>
          <S.TitleButtonContainer>
            <S.LectureButton onClick={(() => openModal(<LectureSettingModal />))}>
              <FilterOut />
              <span>강의 세부 설정</span>
            </S.LectureButton>
          </S.TitleButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            value={lectureTitle}
            maxLength={100}
            placeholder='강의 제목 (100자 이내)'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLectureTitle(e.target.value)
            }
          />
          <S.InputMainText
            value={lectureContent}
            maxLength={MAXLENGTH}
            placeholder='강의 설명 작성 (1000자 이내)'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setLectureContent(e.target.value)
            }
          />
          {/* <S.CreateButton
            onClick={onCreateModal}
            isAble={
              lectureTitle !== '' &&
              lectureContent !== '' &&
              lectureTypeText !== '강의 유형 선택' &&
              startDateText !== '신청 시작일 선택' &&
              endDateText !== '신청 마감일 선택' &&
              completeDateText !== '강의 시작일 선택' &&
              lectureTypeText !== '대학탐방프로그램'
                ? scoreText !== '학점 선택'
                : true && people !== 0
            }
          >
            개설 신청하기
          </S.CreateButton> */}
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default LectureCreatePage
