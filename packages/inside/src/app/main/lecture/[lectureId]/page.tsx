import LectureDetailPage from '@/PageContainer/LectureDetailPage'

const LectureDetail = ({ params }: { params: { lectureId: string } }) => {
  return <LectureDetailPage lectureId={params.lectureId} />
}

export default LectureDetail
