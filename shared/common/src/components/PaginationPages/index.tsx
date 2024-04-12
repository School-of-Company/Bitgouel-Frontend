'use client'

import { ArrowIcon, DoubleArrowIcon } from '@bitgouel/common'
import * as S from './style'

interface PaginationPagesProps {
  currentPage: number
  isFirst: boolean
  isLast: boolean
  slicePages: number[]
  onPrevPage: (isDouble: boolean) => void
  onNextPage: (isDouble: boolean) => void
  onPageClick: (pageNum: number) => void
}

const PaginationPages = ({
  currentPage,
  isFirst,
  isLast,
  slicePages,
  onPrevPage,
  onNextPage,
  onPageClick,
}: PaginationPagesProps) => {
  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <S.ArrowContainer isPrev={true}>
          <DoubleArrowIcon onClick={() => onPrevPage(true)} />
          <ArrowIcon onClick={() => onPrevPage(false)} />
        </S.ArrowContainer>
      )}
      <S.NumbersContainer>
        {slicePages.map((num) => (
          <S.PageNumber
            key={num}
            selected={currentPage === num}
            onClick={() => onPageClick(num)}
          >
            {num}
          </S.PageNumber>
        ))}
      </S.NumbersContainer>
      {!isLast && (
        <S.ArrowContainer isPrev={false}>
          <ArrowIcon onClick={() => onNextPage(false)} />
          <DoubleArrowIcon onClick={() => onNextPage(true)} />
        </S.ArrowContainer>
      )}
    </S.PaginationWrapper>
  )
}

export default PaginationPages
