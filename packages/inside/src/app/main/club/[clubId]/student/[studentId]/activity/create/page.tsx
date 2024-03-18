import { ActivityCreatePage } from '@/PageContainer'
import { StudentIdProps } from '@bitgouel/types'

const ActivityCreate = ({ params }: { params: StudentIdProps }) => {
  return <ActivityCreatePage studentIdProps={params} />
}

export default ActivityCreate
