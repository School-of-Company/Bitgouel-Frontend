import { NoticeDetailPage } from '@bitgouel/common'

const NoticeDetail = ({ params }: { params: { noticeId: string } }) => {
  return <NoticeDetailPage noticeId={params.noticeId} />
}

export default NoticeDetail
