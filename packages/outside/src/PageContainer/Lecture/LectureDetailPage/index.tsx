'use client'

import Bg3 from '@common/assets/png/mainBg3.png'
import * as S from './style'
import { useDeleteRejectLecture, useGetDetailLecture } from '@bitgouel/api'
import { lectureToKor } from '@common/constants'
import { usePatchApproveLecture } from '@bitgouel/api'
import { cutedStr } from '@common/utils'

const LectureDeatilPage = ({ lectureId }: { lectureId: string }) => {
  const { data } = useGetDetailLecture(lectureId)
  const { mutate: approve } = usePatchApproveLecture(lectureId)
  const { mutate: reject } = useDeleteRejectLecture(lectureId)

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
              <S.Date>{`${cutedStr(data?.data.createAt, 0, 4)}년 ${cutedStr(
                data?.data.createAt,
                5,
                7
              )}월 ${cutedStr(data?.data.createAt, 8, 10)}일 ${cutedStr(
                data?.data.createAt,
                11,
                16
              )}`}</S.Date>
            </S.SubTitle>
            <S.Title>{data?.data.name}</S.Title>
            <S.SubMenuContainer>
              <S.From>{lectureToKor[data?.data.lectureType]}</S.From>
              <S.MenuNum>
                <div>
                  <span>신청기간: </span>
                  <span>
                    {`${cutedStr(data?.data.startDate, 0, 4)}년 ${cutedStr(
                      data?.data.startDate,
                      5,
                      7
                    )}월 ${cutedStr(data?.data.startDate, 8, 10)}일 ${cutedStr(
                      data?.data.startDate,
                      11,
                      16
                    )}`}{' '}
                    ~{' '}
                    {`${cutedStr(data?.data.endDate, 0, 4)}년 ${cutedStr(
                      data?.data.endDate,
                      5,
                      7
                    )}월 ${cutedStr(data?.data.endDate, 8, 10)}일 ${cutedStr(
                      data?.data.endDate,
                      11,
                      16
                    )}`}
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
                  <span>{`${cutedStr(
                    data?.data.completeDate,
                    0,
                    4
                  )}년 ${cutedStr(data?.data.completeDate, 5, 7)}월 ${cutedStr(
                    data?.data.completeDate,
                    8,
                    10
                  )}일 ${cutedStr(data?.data.completeDate, 11, 16)}`}</span>
                </div>
                <div>
                  <span>학점: </span>
                  <span>{data?.data.credit}점</span>
                </div>
              </S.MenuNum>
            </S.SubMenuContainer>
          </S.TitleContainer>
          <S.MainText>{data?.data.content}</S.MainText>
          <S.ButtonWrapper>
            <S.ButtonContainer>
              <S.CreateNotApproveButton onClick={() => reject()}>
                신청 거부하기
              </S.CreateNotApproveButton>
              <S.CreateApproveButton onClick={() => approve()}>
                신청 승인하기
              </S.CreateApproveButton>
            </S.ButtonContainer>
          </S.ButtonWrapper>
        </S.Document>
      </S.DocumentWrapper>
    </div>
  )
}

export default LectureDeatilPage
