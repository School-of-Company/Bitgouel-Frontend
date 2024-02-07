import { NoticeDetailPage } from '@bitgouel/common/src/pages'

const NoticeDetailDetail = ({ params }: { params: { noticeId: string } }) => {
  return <NoticeDetailPage noticeId={params.noticeId} />
}

export default NoticeDetailDetail
