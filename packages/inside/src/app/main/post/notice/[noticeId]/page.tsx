import { NoticeDetailPage } from '@bitgouel/common/src/pages'

const NoticeDetail = ({ params }: { params: { noticeId: string } }) => {
  return <NoticeDetailPage noticeId={params.noticeId} />
}

export default NoticeDetail
