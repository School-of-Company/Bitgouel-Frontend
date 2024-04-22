'use client'

import { ChangeEvent, Dispatch } from 'react'

interface handleSelectParameter {
  id: string
  setIds: Dispatch<React.SetStateAction<string[]>>
  checked: boolean
}

export const handleSelect = ({
  id,
  setIds,
  checked,
}: handleSelectParameter) => {
  console.log(checked)
  if (checked) setIds((prev) => [...prev, id])
  else setIds((prev) => prev.filter((listId) => listId !== id))
}
