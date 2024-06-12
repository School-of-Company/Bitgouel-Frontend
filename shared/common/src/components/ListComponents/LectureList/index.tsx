'use client'

import { useGetLectureList } from '@bitgouel/api'
import {
  LectureItem,
  MainStyle,
  NoneResult,
  PaginationPages,
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
      {data?.lectures && (
        <>
          <MainStyle.MainContainer>
            {data?.lectures.content.length <= 0 ? (
              <NoneResult notDataTitle={'강의 목록이'} />
            ) : data.lectures.content.length ? (
              data.lectures.content.map((item) => (
                <LectureItem key={item.id} item={item} />
              ))
            ) : (
              isLoading && <div>강의 목록 불러오는 중...</div>
            )}
          </MainStyle.MainContainer>
          {data?.lectures && data.lectures.content.length > 0 && !isLoading && (
            <PaginationPages
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  )
}

export default LectureList
