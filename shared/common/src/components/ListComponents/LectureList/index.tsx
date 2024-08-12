'use client'

import { useGetLectureList } from '@bitgouel/api'
import {
  LectureItem,
  MainStyle,
  NoneResult,
  PaginationPages,
  WaitingAnimation,
} from '@bitgouel/common'
import { useEffect, useState } from 'react'

const LectureList = ({ lectureTypeFilter }: { lectureTypeFilter: string }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const { data, refetch, isLoading } = useGetLectureList({
    page: currentPage,
    size: 10,
    type: lectureTypeFilter,
  })

  const pages = Array.from({ length: data?.lectures.totalPages || 0 }).map(
    (_, i) => i
  )

  useEffect(() => {
    refetch()
  }, [lectureTypeFilter, currentPage])

  return (
    <>
      <MainStyle.MainContainer>
        {isLoading && <WaitingAnimation title='강의 목록을' />}
        {data?.lectures.content.length === 0 ? (
          <NoneResult title='강의 목록이' />
        ) : (
          data?.lectures.content.map((lecture) => (
            <LectureItem key={lecture.id} item={lecture} />
          ))
        )}
      </MainStyle.MainContainer>
      {data?.lectures.content.length > 0 && (
        <PaginationPages
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  )
}

export default LectureList
