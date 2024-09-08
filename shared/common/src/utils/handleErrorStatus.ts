import { toast } from 'react-toastify'

interface ErrorStatusMap {
  [key: number]: () => void
}

const handleErrorStatus = (status: number, errorStatusMap: ErrorStatusMap) => {
  if (status >= 500) return toast.error('서버 오류가 발생했습니다.')

  const statusFn = errorStatusMap[status]
  if (statusFn) statusFn()
}

export default handleErrorStatus
