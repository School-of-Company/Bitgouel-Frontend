import { ActivityDetailPage } from '@/PageContainer'

const ActivityDetail = ({ params }: { params: { activity_Id: string } }) => {
  return <ActivityDetailPage activity_Id={params.activity_Id} />
}

export default ActivityDetail
