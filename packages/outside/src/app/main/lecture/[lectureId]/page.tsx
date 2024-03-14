import { LectureDetailPage } from '@bitgouel/common/src/pages'

const LectureDetail = ({ params }: { params: { lectureId: string } }) => {
  return <LectureDetailPage lectureId={params.lectureId} />
}

export default LectureDetail
