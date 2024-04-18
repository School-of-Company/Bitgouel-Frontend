'use client'

import { ArrowIcon, DoubleArrowIcon } from '@bitgouel/common'
import { PaginationPagesProps } from '@bitgouel/types'
import { useState } from 'react'
import * as S from './style'

const PaginationPages = ({
  pages,
  currentPage,
  setCurrentPage,
  isFirst,
}: PaginationPagesProps) => {
  const [startPage, setStartPage] = useState(0)

  const makeSplice = (): number[][] => {
    const dividePages: number[][] = []
    const copyPages = [...pages]
    while (copyPages.length > 0) {
      const splicePage = copyPages.splice(0, 5)
      dividePages.push(splicePage)
    }
    return dividePages
  }
  const isLast = makeSplice()[makeSplice().length - 1].includes(currentPage)

  const onNextPage = (double?: boolean) => {
    if (double) {
      const dividePages = makeSplice()
      const nextSection = dividePages.find((divide) =>
        divide.includes(currentPage)
      )
      setStartPage(nextSection[nextSection.length - 1] + 1)
      setCurrentPage(nextSection[nextSection.length - 1] + 1)
    } else if (currentPage !== 0 && (currentPage + 1) % 5 === 0) {
      setStartPage((prev) => prev + 5)
      setCurrentPage((prev) => prev + 1)
    } else setCurrentPage((prev) => prev + 1)
  }

  const onPrevPage = (double?: boolean) => {
    if (double) {
      setStartPage(0)
      setCurrentPage(0)
    } else if (currentPage % 5 === 0) {
      setStartPage((prev) => prev - 5)
      setCurrentPage((prev) => prev - 1)
    } else setCurrentPage((prev) => prev - 1)
  }

  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <S.ArrowContainer isPrev={true}>
          <DoubleArrowIcon onClick={() => onPrevPage(true)} />
          <ArrowIcon onClick={() => onPrevPage(false)} />
        </S.ArrowContainer>
      )}
      <S.NumbersContainer>
        {pages.slice(startPage, startPage + 5).map((num) => (
          <S.PageNumber
            key={num}
            selected={currentPage === num}
            onClick={() => setCurrentPage(num)}
          >
            {num + 1}
          </S.PageNumber>
        ))}
      </S.NumbersContainer>
      {!isLast && pages.length > 5 && (
        <S.ArrowContainer isPrev={false}>
          <ArrowIcon onClick={() => onNextPage(false)} />
          <DoubleArrowIcon onClick={() => onNextPage(true)} />
        </S.ArrowContainer>
      )}
    </S.PaginationWrapper>
  )
}

export default PaginationPages
