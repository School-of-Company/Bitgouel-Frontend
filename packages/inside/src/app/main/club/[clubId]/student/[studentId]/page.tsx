import { StudentPage } from '@bitgouel/common/src/pages'
import { StudentIdProps } from '@bitgouel/types'

const Student = ({ params }: { params: StudentIdProps }) => {
  return <StudentPage studentIdProps={params} />
}

export default Student
