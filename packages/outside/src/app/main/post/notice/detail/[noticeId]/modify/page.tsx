import { NoticeWritePage } from '@outside/PageContainer'

const NoticeModify = ({ params }: { params: { noticeId: string } }) => {
  return <NoticeWritePage noticeId={params.noticeId} />
}

export default NoticeModify
