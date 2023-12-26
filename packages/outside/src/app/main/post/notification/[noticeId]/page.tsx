import { NotificationDetailPage } from '@bitgouel/common/src/pages'

const NotificationDetail = ({ params }: { params: { noticeId: string } }) => {
  return <NotificationDetailPage noticeId={params.noticeId} />
}

export default NotificationDetail
