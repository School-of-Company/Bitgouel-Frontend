import { LectureWritePage } from '@bitgouel/common';

const LectureModify = ({ params }: { params: { lectureId: string } }) => {
  return <LectureWritePage lectureId={params.lectureId} />
};

export default LectureModify;