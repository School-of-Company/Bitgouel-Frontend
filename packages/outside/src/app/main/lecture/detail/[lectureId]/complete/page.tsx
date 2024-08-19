import { LectureCompletePage } from '@bitgouel/common'

const LectureComplete = ({ params }: { params: { lectureId: string } }) => {
  return <LectureCompletePage lectureId={params.lectureId} />
}

export default LectureComplete
