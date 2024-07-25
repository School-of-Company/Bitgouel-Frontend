'use client'

import { useGetLines } from '@bitgouel/api'
import { LectureDivision, LectureLine } from '@bitgouel/common'
import { FormEvent, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import SearchComponent from '../SearchComponent'

const SearchLine = () => {
  const [lectureLine, setLectureLine] = useRecoilState(LectureLine)
  const lectureDivision = useRecoilValue(LectureDivision)
  const [line, setLine] = useState<string>('')
  const { data, refetch } = useGetLines({
    keyword: line,
    division: lectureDivision,
  })

  const onSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault()
    refetch()
  }

  const onSelectLine = (lineItem: string) => {
    setLectureLine(lineItem)
    setLine('')
  }

  const onDeleteLine = () => {
    setLectureLine('')
    refetch()
  }

  return (
    <SearchComponent>
      <SearchComponent.SearchInputBox
        inputValue={line}
        setInputValue={setLine}
        recoilValue={lectureLine}
        onSubmit={onSubmit}
        onDeleteInputValue={onDeleteLine}
        inputPlaceholder='핵심분야'
      />
      {lectureLine.length <= 0 && (
        <SearchComponent.SearchItemList
          searchList={data?.lines || []}
          inputValue={line}
          onSelectInputValue={onSelectLine}
          addText='핵심분야'
        />
      )}
    </SearchComponent>
  )
}

export default SearchLine
