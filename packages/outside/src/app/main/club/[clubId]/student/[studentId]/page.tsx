import React from 'react'

import { StudentPage } from '@bitgouel/common'
import { StudentIdProps } from '@bitgouel/types'

const Student = ({ params }: { params: StudentIdProps }) => {
  return <StudentPage studentIdProps={params} />
}

export default Student
