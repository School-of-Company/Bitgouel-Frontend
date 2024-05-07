'use client'

import { FilterListTypes } from "@bitgouel/types"
import { Dispatch, SetStateAction, useState } from "react"

interface onCheckedParameter {
  text: string
  checked: boolean
  inputValue?: string
}

interface Parameter {
  defaultFilterList: FilterListTypes[]
  setFilterPayload: Dispatch<SetStateAction<string>>
}

const useFilterSelect = ({defaultFilterList, setFilterPayload}: Parameter) => {
  const [filterList, setFilterList] = useState<FilterListTypes[]>(defaultFilterList)
  const onSelected = (parameter: onCheckedParameter) => {
    setFilterList((filter) =>
      filter.map((filterItem) =>
        filterItem.text === parameter.text
          ? { ...filterItem, checked: true }
          : { ...filterItem, checked: false }
      )
    )

    if (!parameter.checked && parameter.text === '전체') setFilterPayload('')
    else if (parameter.checked && parameter.text === '기타') setFilterPayload(parameter.inputValue)
    else if (!parameter.checked) setFilterPayload(parameter.text)
  }

  return { filterList, onSelected }

}

export default useFilterSelect