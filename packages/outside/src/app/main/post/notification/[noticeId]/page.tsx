import { NoticeDetailPage } from '@bitgouel/common/src/pages'

const NotificationDetail = ({ params }: { params: { noticeId: string } }) => {
  return <NoticeDetailPage noticeId={params.noticeId} />
}

export default NotificationDetail
