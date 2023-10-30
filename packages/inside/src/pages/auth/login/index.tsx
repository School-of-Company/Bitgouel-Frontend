import React from 'react'
import { Login } from '@common/components'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const router = useRouter()
  return (
    <div>
      <Login router={router} />
    </div>
  )
}

export default LoginPage
