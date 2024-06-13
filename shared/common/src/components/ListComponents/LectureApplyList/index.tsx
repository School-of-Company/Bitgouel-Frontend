'use client'

import { useGetLectureApplyList } from '@bitgouel/api'
import LectureApplyItem from '../../LectureApplyItem'
import * as S from './style'
import { NoneResult, WaitingAnimation } from '@bitgouel/common'

const LectureApplyList = ({ lectureId }: { lectureId: string }) => {
  const { data, isLoading } = useGetLectureApplyList(lectureId)

  return (
    <S.ListContainer>
      {isLoading && <WaitingAnimation title={'강의 신청자를'} />}
      {!isLoading && data?.students && data.students.length <= 0 && (
        <NoneResult title={'강의 신청자가'} />
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
