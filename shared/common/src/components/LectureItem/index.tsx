'use client'

import { lectureToKor, lectureStatusToKor } from '../../constants'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { LectureItemType } from '@bitgouel/api'
import { cutedStr } from '../../utils'

interface LectureItemProps {
  item: LectureItemType
  inside: boolean
}

const LectureItem = ({ item, inside }: LectureItemProps) => {
  const router = useRouter()

  return (
    <S.LectureItemWrapper
      onClick={() => router.push(`/main/lecture/${item.id}`)}
    >
      <S.SubTitle>
        <S.Professor>{item.lecturer}</S.Professor>
        <S.Date>{`${cutedStr(item.completeDate, 0, 4)}년 ${cutedStr(
          item.completeDate,
          8,
          10
        )}월 ${cutedStr(item.completeDate, 8, 10)}일 ${cutedStr(
          item.completeDate,
          11,
          16
        )}`}</S.Date>
      </S.SubTitle>
      <S.Title>{item.name}</S.Title>
      <S.MainTextContainer>
        <S.MainText>{item.content}</S.MainText>
      </S.MainTextContainer>
      <S.SubMenuContainer>
        <S.From>{lectureToKor[item.lectureType]}</S.From>
        <S.StatusFrom
          status={item.approveStatus}
          display={inside ? 'none' : ''}
        >
          {lectureStatusToKor[item.approveStatus]}
        </S.StatusFrom>
        <S.MenuNum>
          <span>
            {`${cutedStr(item.startDate, 0, 4)}년 ${cutedStr(
              item.startDate,
              8,
              10
            )}월 ${cutedStr(item.startDate, 8, 10)}일 ${cutedStr(
              item.startDate,
              11,
              16
            )}`}{' '}
            ~{' '}
            {`${cutedStr(item.endDate, 0, 4)}년 ${cutedStr(
              item.endDate,
              8,
              10
            )}월 ${cutedStr(item.endDate, 8, 10)}일 ${cutedStr(
              item.endDate,
              11,
              16
            )}`}
          </span>
          <span>•</span>
          <span>
            {item.headCount}/{item.maxRegisteredUser}명
          </span>
        </S.MenuNum>
      </S.SubMenuContainer>
    </S.LectureItemWrapper>
  )
}
export default LectureItem
