import React from 'react'
import { StudentPage } from '@bitgouel/common/src/pages'

interface StudentProps {
  params: { student_id: string }
}

const Student = ({ params: { student_id } }: StudentProps) => {
  return <StudentPage student_id={student_id} />
}

export default Student
