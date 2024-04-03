import { ActivityModifyPage } from '@/PageContainer'
import { StudentIdProps } from '@bitgouel/types'
import { ActivityWritePage } from '@bitgouel/common'

const ActivityModify = ({
  params,
}: {
  params: { studentId: string; clubId: string; activityId: string }
}) => {
  return (
    <ActivityWritePage
      studentId={params.studentId}
      clubId={params.clubId}
      activityId={params.activityId}
    />
  )
}

export default ActivityModify
