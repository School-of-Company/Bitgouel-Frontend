'use client'

import { useGetLectureList } from '@bitgouel/api'
import {
  Bg3,
  Filter,
  FilterModal,
  LectureItem,
  PaginationPages,
  Plus,
  PrintIcon,
  useDownload,
  useFilterSelect,
  useModal
} from '@bitgouel/common'
import { FilterListTypes } from '@bitgouel/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as S from './style'

export interface onCheckedArgsTypes {
  text: string
  checked: boolean
  inputValue?: string
}

const defaultFilterList = [
  { text: '전체', checked: true },
    {
      text: '상호학점인정교육과정',
      checked: false,
    },
    {
      text: '대학탐방프로그램',
      checked: false,
    },
     {
      text: '유관기관프로그램',
      checked: false,
    },
    {
      text: '기업산학연계직업체험프로그램',
      checked: false,
    },
    {
      text: '기타',
      checked: false,
    }
]

const LecturePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [lectureTypeFilter, setLectureTypeFilter] = useState<string>('')
  const [isClick, setIsClick] = useState<boolean>(false)
  const { push } = useRouter()
  const { openModal } = useModal()
  const { excelDown } = useDownload({
    fileName: '강의 신청 결과',
    fileTypes: 'xlsx',
    isClick,
  })
  const {filterList, onSelected} = useFilterSelect({defaultFilterList, setFilterPayload: setLectureTypeFilter})
  const [currentPage, setCurrentPage] = useState(0)
  const { data, refetch, isLoading } = useGetLectureList({
    page: currentPage,
    size: 10,
    type: lectureTypeFilter,
  })

  const pages = Array.from({ length: data?.lectures.totalPages || 0 }).map(
    (_, i) => i
  )

  const onDownload = () => {
    setIsClick(true)
    excelDown()
  }

  useEffect(() => {
    refetch()
  }, [lectureTypeFilter, currentPage])

  return (
    <div>
      <S.SlideBg url={Bg3}>
        <S.BgContainer>
          <S.LectureTitle>강의 목록</S.LectureTitle>
          <S.ButtonContainer>
            {isAdmin && (
              <>
                <S.LectureButton onClick={onDownload}>
                  <PrintIcon />
                  <span>신청 명단 출력</span>
                </S.LectureButton>
                <S.LectureButton onClick={() => push('/main/lecture/create')}>
                  <Plus />
                  <span>강의 개설하기</span>
                </S.LectureButton>
              </>
            )}
              <S.LectureButton
                onClick={() => openModal(
                  <FilterModal
                    title='강의 유형'
                    filterList={filterList}
                    onSelected={onSelected}
                  />
                )}
              >
                <Filter />
                <span>필터</span>
              </S.LectureButton>
 <FilterModal
                    title='강의 유형'
                    filterList={filterList}
                    onSelected={onSelected}
                  />          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.ListWrapper>
        <S.ListContainer>
          {data?.lectures.content.length
            ? data.lectures.content.map((item) => (
                <LectureItem key={item.id} item={item} />
              ))
            : '강의 목록이 없습니다.'}
        </S.ListContainer>
        {!!data?.lectures.content?.length && !isLoading && (
          <PaginationPages
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </S.ListWrapper>
    </div>
  )
}

export default LecturePage
