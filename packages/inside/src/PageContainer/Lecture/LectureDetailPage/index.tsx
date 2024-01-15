'use client'

import * as S from './style'
import { useGetDetailLecture, usePostApplicationLecture } from '@bitgouel/api'
import { LectureApplyModal } from '@/modals'
import { useRecoilValue } from 'recoil'
import { Bg3, Role, lectureToKor,useModal } from '@bitgouel/common'

const LectureDetailPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetDetailLecture(lectureId)
  const { mutate } = usePostApplicationLecture(lectureId)
  const { openModal } = useModal()
  const role = useRecoilValue(Role)

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
              <S.Professor>{data?.data.lecturer} 교수</S.Professor>
              <S.Date>{`${data?.data.createAt.slice(
                0,
                4
              )}년 ${data?.data.createAt.slice(
                5,
                7
              )}월 ${data?.data.createAt.slice(
                8,
                10
              )}일 ${data?.data.createAt.slice(11, 16)}`}</S.Date>
            </S.SubTitle>
            <S.Title>{data?.data.name}</S.Title>
            <S.SubMenuContainer>
              <S.From>
                {
                  lectureToKor[
                    data?.data.lectureType ||
                      'MUTUAL_CREDIT_RECOGNITION_PROGRAM'
                  ]
                }
              </S.From>
              <S.MenuNum>
                <div>
                  <span>신청기간: </span>
                  <span>
                    {`${data?.data.startDate.slice(
                      0,
                      4
                    )}년 ${data?.data.startDate.slice(
                      5,
                      7
                    )}월 ${data?.data.startDate.slice(
                      8,
                      10
                    )}일 ${data?.data.startDate.slice(11, 16)}`}{' '}
                    ~{' '}
                    {`${data?.data.endDate.slice(
                      0,
                      4
                    )}년 ${data?.data.endDate.slice(
                      5,
                      7
                    )}월 ${data?.data.endDate.slice(
                      8,
                      10
                    )}일 ${data?.data.endDate.slice(11, 16)}`}
                  </span>
                </div>
                <div>
                  <span>수강정원: </span>
                  <span>
                    {data?.data.headCount}/{data?.data.maxRegisteredUser}명
                  </span>
                </div>
                <div>
                  <span>강의 시작: </span>
                  <span>
                    {`${data?.data.completeDate.slice(
                      0,
                      4
                    )}년 ${data?.data.completeDate.slice(
                      5,
                      7
                    )}월 ${data?.data.completeDate.slice(
                      8,
                      10
                    )}일 ${data?.data.completeDate.slice(11, 16)}`}
                  </span>
                </div>
                <div>
                  <span>학점: </span>
                  <span>{data?.data.credit}점</span>
                </div>
              </S.MenuNum>
            </S.SubMenuContainer>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
          <S.ButtonContainer>
            <S.LectureApplyButton
              isRegistered={data?.data.isRegistered}
              isStudent={role === "ROLE_STUDENT"}
              onClick={() =>
                !data?.data.isRegistered
                  ? openModal(
                      <LectureApplyModal
                        title={data?.data.name}
                        apply={() => mutate()}
                      />
                    )
                  : null
              }
            >
              {data?.data.isRegistered
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
