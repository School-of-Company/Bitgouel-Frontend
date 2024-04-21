'use client'

import { ArrowIcon, DoubleArrowIcon } from '@bitgouel/common'
import { PaginationPagesProps } from '@bitgouel/types'
import { useState } from 'react'
import * as S from './style'

const PaginationPages = ({
  pages,
  currentPage,
  setCurrentPage,
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
  const dividePages = makeSplice()
  const lastPage = dividePages[dividePages.length - 1]
  const isLast = lastPage.includes(currentPage)
  const isFirst = dividePages[0].includes(currentPage)

  const onNextPage = (double?: boolean) => {
    if (double) {
      const nextSection =
        dividePages.find((divide) => divide.includes(currentPage)) || []
      setStartPage(nextSection[nextSection.length - 1] + 1)
      setCurrentPage(nextSection[nextSection.length - 1] + 1)
    } else if (currentPage !== 0 && (currentPage + 1) % 5 === 0) {
      setStartPage((prev) => prev + 5)
      setCurrentPage((prev) => prev + 1)
    } else setCurrentPage((prev) => prev + 1)
  }

  const onPrevPage = (double?: boolean) => {
    if (double) {
      const prevSection =
        dividePages.find((divide) => divide.includes(currentPage)) || []
      setStartPage(prevSection[0] - 5)
      setCurrentPage(prevSection[0] - 5)
    } else if (currentPage % 5 === 0) {
      setStartPage((prev) => prev - 5)
      setCurrentPage((prev) => prev - 1)
    } else setCurrentPage((prev) => prev - 1)
  }

  return (
    <S.PaginationWrapper>
      <S.ArrowContainer isPrev={true}>
        {!isFirst && <DoubleArrowIcon onClick={() => onPrevPage(true)} />}
        {currentPage !== 0 && <ArrowIcon onClick={() => onPrevPage(false)} />}
      </S.ArrowContainer>
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

      <S.ArrowContainer isPrev={false}>
        {lastPage[lastPage.length - 1] !== currentPage && (
          <ArrowIcon onClick={() => onNextPage(false)} />
        )}
        {!isLast && <DoubleArrowIcon onClick={() => onNextPage(true)} />}
      </S.ArrowContainer>
    </S.PaginationWrapper>
  )
}

export default PaginationPages
