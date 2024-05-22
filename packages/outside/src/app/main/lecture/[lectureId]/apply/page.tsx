import { LectureApplyListPage } from '@bitgouel/common'

const LectureApplyList = ({ params }: { params: { lectureId: string } }) => {
  return <LectureApplyListPage lectureId={params.lectureId} />
}

export default LectureApplyList
