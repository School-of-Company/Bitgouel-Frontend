'use client'

import { LectureSemesterToKor } from '@bitgouel/common'
import { LectureItemProps } from '@bitgouel/types'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import * as S from './style'
const LectureItem = ({ item }: LectureItemProps) => {
  const { push } = useRouter()

  return (
    <S.LectureItemWrapper onClick={() => push(`/main/lecture/detail/${item.id}`)}>
      <S.TitleBox>
        <S.MainTitleContainer>
          <S.Title>{item.name}</S.Title>
          <S.Professor>{item.lecturer}</S.Professor>
        </S.MainTitleContainer>
        <S.TypeText>{item.lectureType}</S.TypeText>
      </S.TitleBox>
      <S.MainText>
        {item.content.length > 230
          ? `${item.content.slice(0, 230)}...`
          : item.content}
      </S.MainText>
      <S.MenuWrapper>
        <div>
          <S.TypeText>{LectureSemesterToKor[item.semester]}</S.TypeText>
          <S.TypeText>
            {item.division}
            {' | '}
            {item.line}
            {' | '}
            {item.department}
          </S.TypeText>
        </div>
        <div>
          <S.LectureMenu>
            {item.headCount}/{item.maxRegisteredUser}명
          </S.LectureMenu>
          <S.LectureMenu>
            {dayjs(item.startDate).format('YYYY.MM.DD')} ~{' '}
            {dayjs(item.endDate).format('YYYY.MM.DD')}
          </S.LectureMenu>
        </div>
      </S.MenuWrapper>
    </S.LectureItemWrapper>
  )
}
export default LectureItem
