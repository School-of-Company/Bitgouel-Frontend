import { ActivityDetailPage } from '@bitgouel/common'

interface Props {
  params: {
    activityId: string
    studentId: string
    clubId: string
  }
}

const ActivityDetail: React.FC<Props> = ({ params }) => {
  return <ActivityDetailPage studentIdProps={params} />
}

export default ActivityDetail
