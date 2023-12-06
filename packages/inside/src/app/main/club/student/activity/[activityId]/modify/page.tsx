import React from 'react'
import { ActivityModifyPage } from '@/PageContainer'

const ActivityModify = ({ params }: { params: { activity_Id: string } }) => {
  return <ActivityModifyPage activity_Id={params.activity_Id} />
}

export default ActivityModify
