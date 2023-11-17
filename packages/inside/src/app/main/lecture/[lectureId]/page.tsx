import LectureDetailPage from '@/PageContainer/Lecture/LectureDetailPage'
import React from 'react'

const LectureDetail = ({ params }: { params: { lectureId: string } }) => {
  return <LectureDetailPage lectureId={params.lectureId} />
}

export default LectureDetail
