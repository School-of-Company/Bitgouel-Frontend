'use client'

import { IsModal } from '@bitgouel/common'
import { ReactNode } from 'react'
import { useSetRecoilState } from 'recoil'

const useModal = () => {
  const setIsModal = useSetRecoilState<ReactNode>(IsModal)

  const openModal = (node: ReactNode) => setIsModal(node)
  const closeModal = () => setIsModal(null)

  return { openModal, closeModal }
}

export default useModal
