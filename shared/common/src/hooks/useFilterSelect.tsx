'use client'

import { FilterListTypes } from "@bitgouel/types"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { FilterModal } from "@bitgouel/common"

interface onSelectedParameter {
  item: string
  checked: boolean
  inputValue?: string
}

interface Parameter {
  defaultFilterList: FilterListTypes[]
  setFilterPayload: Dispatch<SetStateAction<string>>
}

const useFilterSelect = ({ defaultFilterList, setFilterPayload}: Parameter) => {
  const [filterList, setFilterList] = useState<FilterListTypes[]>(defaultFilterList)
  const onSelected = (parameter: onSelectedParameter) => {
    setFilterList((filter) =>
      filter.map((filterItem) =>
        filterItem.item === parameter.item
          ? { ...filterItem, checked: true }
          : { ...filterItem, checked: false }
      )
    )

    if (!parameter.checked && parameter.item === '전체') setFilterPayload('')
    else if (parameter.checked && parameter.item === '기타') setFilterPayload(parameter.inputValue)
    else if (!parameter.checked) setFilterPayload(parameter.item)
  }

  return { filterList, onSelected }

}

export default useFilterSelect