import { NoticeDetailPage } from '@bitgouel/common'

const NoticeDetailDetail = ({ params }: { params: { noticeId: string } }) => {
  return <NoticeDetailPage noticeId={params.noticeId} />
}

export default NoticeDetailDetail
