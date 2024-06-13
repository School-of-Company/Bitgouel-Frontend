import { ActivityWritePage } from '@inside/PageContainer'
import { StudentIdProps } from '@bitgouel/types'

const ActivityModify = ({
  params,
}: {
  params: StudentIdProps & { activityId: string }
}) => {
  return (
    <ActivityWritePage
      studentIdProps={{ studentId: params.studentId, clubId: params.clubId }}
      activityId={params.activityId}
    />
  )
}

export default ActivityModify
