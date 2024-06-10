'use client'

import { useGetLectureApplyList } from '@bitgouel/api'
import LectureApplyItem from '../../LectureApplyItem'
import * as S from './style'

const LectureApplyList = ({ lectureId }: { lectureId: string }) => {
  const { data, isLoading } = useGetLectureApplyList(lectureId)
  
  return (
    <S.ListContainer>
      {isLoading && <div>이수 목록을 불러오는 중...</div>}
      {data?.students && data.students.length <= 0 && (
        <div>이수 목록이 없어요</div>
      )}
      {data?.students.map((student) => (
        <LectureApplyItem
          key={student.id}
          item={student}
          lectureId={lectureId}
        />
      ))}
    </S.ListContainer>
  )
}

export default LectureApplyList
