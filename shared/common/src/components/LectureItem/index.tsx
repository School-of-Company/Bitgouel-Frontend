import { lectureToKor, lectureStatusToKor } from '../../constants'
import * as S from './style'
import { useRouter } from 'next/navigation'
import { LectureItemType } from '../../types'

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
        <S.Date>{item.startDate}</S.Date>
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
            {item.startDate} ~ {item.endDate}
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
