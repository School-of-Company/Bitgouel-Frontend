import React from 'react'
import { LectureDetailPage } from '@/PageContainer'

const LectureDetail = ({ params }: { params: { lectureId: string } }) => {
  return <LectureDetailPage lectureId={params.lectureId} />
}

export default LectureDetail
