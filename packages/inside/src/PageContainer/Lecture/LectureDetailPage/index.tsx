'use client'

import { LectureApplyModal } from '@/modals'
import { useGetDetailLecture, usePostApplicationLecture } from '@bitgouel/api'
import { Bg3, Role, lectureToKor, sliceDateTime, useModal } from '@bitgouel/common'
import { useRecoilValue } from 'recoil'
import * as S from './style'

const LectureDetailPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetDetailLecture(lectureId)
  const {
    createAt,
    credit,
    id,
    name,
    content,
    startDate,
    endDate,
    completeDate,
    lectureType,
    lecturer,
    headCount,
    maxRegisteredUser,
    isRegistered,
  } = data?.data || {}
  const { mutate } = usePostApplicationLecture(lectureId)
  const { openModal } = useModal()
  const role = useRecoilValue(Role)
  console.log(role)
  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 상세</S.LectureTitle>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentWrapper>
        <S.Document>
          <S.TitleContainer>
            <S.SubTitle>
              <S.Professor>{lecturer} 교수</S.Professor>
              <S.Date>{sliceDateTime(createAt)}</S.Date>
            </S.SubTitle>
            <S.Title>{name}</S.Title>
            <S.SubMenuContainer>
              <S.From>
                {
                  lectureToKor[
                    lectureType || 'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
                  ]
                }
              </S.From>
              <S.MenuNum>
                <div>
                  <span>신청기간: </span>
                  <span>
                    {sliceDateTime(startDate)} ~ {sliceDateTime(endDate)}
                  </span>
                </div>
                <div>
                  <span>수강정원: </span>
                  <span>
                    {headCount}/{maxRegisteredUser}명
                  </span>
                </div>
                <div>
                  <span>강의 시작: </span>
                  <span>{sliceDateTime(completeDate)}</span>
                </div>
                <div>
                  <span>학점: </span>
                  <span>{credit}점</span>
                </div>
              </S.MenuNum>
            </S.SubMenuContainer>
          </S.TitleContainer>
          <S.MainText>{content}</S.MainText>
          <S.ButtonContainer>
            <S.LectureApplyButton
              isRegistered={isRegistered}
              isStudent={role === 'ROLE_STUDENT'}
              onClick={() =>
                role !== 'ROLE_STUDENT'
                  ? null
                  : isRegistered
                  ? null
                  : openModal(
                      <LectureApplyModal title={name} apply={() => mutate()} />
                    )
              }
            >
              {isRegistered
                ? '수강 신청 완료'
                : role === 'ROLE_STUDENT'
                ? '수강 신청하기'
                : '수강 신청 불가'}
            </S.LectureApplyButton>
          </S.ButtonContainer>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default LectureDetailPage
