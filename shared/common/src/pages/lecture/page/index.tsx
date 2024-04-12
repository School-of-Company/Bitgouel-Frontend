'use client'

import { useGetLectureList } from '@bitgouel/api'
import {
  Bg3,
  Filter,
  FilterComponent,
  LectureFilterType,
  LectureItem,
  PaginationPages,
  Plus,
  PrintIcon,
  useDownload,
} from '@bitgouel/common'
import { LectureTypeEnum, LectureTypesFilterListTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './style'

const LecturePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [lectureTypes, setLectureTypes] = useState<
    LectureTypesFilterListTypes[]
  >([
    { text: '전체', item: 'all', checked: true },
    {
      text: '상호학점인정교육과정',
      item: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
      checked: false,
    },
    {
      text: '대학탐방프로그램',
      item: 'UNIVERSITY_EXPLORATION_PROGRAM',
      checked: false,
    },
  ])
  const [lectureType, setLectureType] = useRecoilState<LectureTypeEnum | ''>(
    LectureFilterType
  )
  const [isLectureType, setIsLectureType] = useState<boolean>(false)
  const [isClick, setIsClick] = useState<boolean>(false)
  const { push } = useRouter()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLectureTypes((prev) =>
      prev.map((type) =>
        type.item === e.target.id
          ? { ...type, checked: true }
          : { ...type, checked: false }
      )
    )

    if (e.target.checked && e.target.id === 'all') setLectureType('')
    else if (e.target.checked) setLectureType(e.target.id as LectureTypeEnum)
  }

  const [page, setPage] = useState(1)
  const { data, refetch } = useGetLectureList({
    page: page - 1,
    size: 2,
    type: lectureType || 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
  })
  const { first, last, content } = data?.data.lectures || {}
  const { excelDown } = useDownload({
    fileName: '강의 신청 결과',
    fileTypes: 'xlsx',
    isClick,
  })

  useEffect(() => {
    refetch()
  }, [lectureType, page])

  // const pages = Array.from({ length: data?.data.lectures.totalPages }).map(
  //   (_, i) => i
  // )
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [slicePages, setSlicePages] = useState<number[]>(pages.slice(0, 5))

  const onNextPage = (isDouble: boolean) => {
    if (isDouble) setPage(pages[pages.length - 1])
    else {
      if (page % 5 === 0) setSlicePages(pages.slice(page, page + 5))
      setPage((prev) => prev + 1)
    }
  }

  const onPrevPage = (isDouble: boolean) => {
    if (isDouble) setPage(0)
    else {
      if (page === slicePages[slicePages.length - 1] - 4)
        setSlicePages(pages.slice(page - 6, page - 1))
      setPage((prev) => prev - 1)
    }
  }

  const onPageClick = (pageNum: number) => {
    setPage(pageNum)
  }

  const onClick = () => {
    setIsClick(true)
    excelDown()
  }
  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 목록</S.LectureTitle>
          <S.ButtonContainer>
            {isAdmin && (
              <>
                <S.LectureButton onClick={onClick}>
                  <PrintIcon />
                  <span>신청 명단 출력</span>
                </S.LectureButton>
                <S.LectureButton onClick={() => push('/main/lecture/create')}>
                  <Plus />
                  <span>강의 개설하기</span>
                </S.LectureButton>
              </>
            )}
            <S.SelectFilterContainer>
              <S.LectureButton
                onClick={() => setIsLectureType((prev) => !prev)}
              >
                <Filter />
                <span>필터</span>
              </S.LectureButton>
              {isLectureType && (
                <FilterComponent
                  title='강의 유형'
                  filterList={lectureTypes}
                  onChange={onChange}
                />
              )}
            </S.SelectFilterContainer>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ListContainer>
          {content?.map((item) => (
            <LectureItem key={item.id} item={item} />
          ))}
        </S.ListContainer>
        <PaginationPages
          currentPage={page}
          isFirst={first}
          isLast={last}
          slicePages={slicePages}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          onPageClick={onPageClick}
        />
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
