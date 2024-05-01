'use client'

import { Dispatch } from 'react'

interface handleSelectParameter {
  id: string
  setIds: Dispatch<React.SetStateAction<string[]>>
  checked: boolean
}

const handleSelect = ({ id, setIds, checked }: handleSelectParameter) => {
  if (checked) setIds((prev) => [...prev, id])
  else setIds((prev) => prev.filter((listId) => listId !== id))
}

export default handleSelect
