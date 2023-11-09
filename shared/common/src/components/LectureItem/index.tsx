import { lectureType } from '../../constants'
import * as S from './style'
import { useRouter } from 'next/router'

interface LectureItemProps {
  item: {
    id: string
    name: string
    lecturer: string
    startDate: string
    endDate: string
    completeDate: string
    lectureType: string
    contents: string
    LectureStatus: string
    headCount: number
    maxRegisteredUser: number
  }
}

const LectureItem = ({ item }: LectureItemProps) => {
  const router = useRouter()

  return (
    <S.LectureItemWrapper onClick={() => router.push('/main/lecture/detail')}>
      <S.SubTitle>
        <S.Professor>{item.lecturer}</S.Professor>
        <S.Date>{item.startDate}</S.Date>
      </S.SubTitle>
      <S.Title>{item.name}</S.Title>
      <S.MainTextContainer>
        <S.MainText>{item.contents}</S.MainText>
      </S.MainTextContainer>
      <S.SubMenuContainer>
        <S.From>{lectureType[item.lectureType]}</S.From>
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
