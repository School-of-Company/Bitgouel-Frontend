import { LectureApplyListPage } from '@bitgouel/common'
import React from 'react'

const LectureApplyList = ({ params }: { params: { lectureId: string } }) => {
  return <LectureApplyListPage lectureId={params.lectureId} />
}

export default LectureApplyList
