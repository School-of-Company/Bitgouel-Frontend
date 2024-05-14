'use client'

import {
  TokenManager,
  useGetLectureExcel,
  useGetLectureList,
} from '@bitgouel/api'
import {
  Bg3,
  Filter,
  FilterModal,
  LectureItem,
  PaginationPages,
  Plus,
  PrintIcon,
  excelDownload,
  useFilterSelect,
  useModal,
} from '@bitgouel/common'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MainStyle } from '@bitgouel/common'

const defaultFilterList = [
  { text: '전체', item: '전체', checked: true },
  {
    text: '상호학점인정교육과정',
    item: '상호학점인정교육과정',
    checked: false,
  },
  {
    text: '대학탐방프로그램',
    item: '대학탐방프로그램',
    checked: false,
  },
  {
    text: '유관기관프로그램',
    item: '유관기관프로그램',
    checked: false,
  },
  {
    text: '기업산학연계직업체험프로그램',
    item: '기업산학연계직업체험프로그램',
    checked: false,
  },
  {
    text: '기타',
    item: '기타',
    checked: false,
  },
]

const LecturePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [lectureTypeFilter, setLectureTypeFilter] = useState<string>('')
  const [isClick, setIsClick] = useState<boolean>(false)
  const tokenManager = new TokenManager()
  const { push } = useRouter()
  const { openModal } = useModal()
  const { filterList, onSelected } = useFilterSelect({
    defaultFilterList,
    setFilterPayload: setLectureTypeFilter,
  })
  const [currentPage, setCurrentPage] = useState(0)
  const { data, refetch, isLoading } = useGetLectureList({
    page: currentPage,
    size: 10,
    type: lectureTypeFilter,
  })
  const { data: applyExcel } = useGetLectureExcel({
    enabled: tokenManager.authority === 'ROLE_ADMIN' && isClick,
  })

  const pages = Array.from({ length: data?.lectures.totalPages || 0 }).map(
    (_, i) => i
  )

  const onDownload = () => {
    setIsClick(true)
    excelDownload({
      data: applyExcel,
      fileName: '강의 신청 명단',
      fileExtension: 'xlsx',
    })
  }

  useEffect(() => {
    refetch()
  }, [lectureTypeFilter, currentPage])

  return (
    <MainStyle.PageWrapper>
      <MainStyle.SlideBg url={Bg3}>
        <MainStyle.BgContainer>
          <MainStyle.PageTitle>강의 목록</MainStyle.PageTitle>
          <MainStyle.ButtonContainer>
            {isAdmin && (
              <>
                <MainStyle.SlideButton onClick={onDownload}>
                  <PrintIcon />
                  <span>신청 명단 출력</span>
                </MainStyle.SlideButton>
                <MainStyle.SlideButton
                  onClick={() => push('/main/lecture/create')}
                >
                  <Plus />
                  <span>강의 개설하기</span>
                </MainStyle.SlideButton>
              </>
            )}
            <MainStyle.SlideButton
              onClick={() =>
                openModal(
                  <FilterModal
                    title='강의 유형'
                    filterList={filterList}
                    onSelected={onSelected}
                  />
                )
              }
            >
              <Filter />
              <span>필터</span>
            </MainStyle.SlideButton>
          </MainStyle.ButtonContainer>
        </MainStyle.BgContainer>
      </MainStyle.SlideBg>
      <MainStyle.MainWrapper>
        <MainStyle.MainContainer>
          {data?.lectures.content.length
            ? data.lectures.content.map((item) => (
                <LectureItem key={item.id} item={item} />
              ))
            : '강의 목록이 없습니다.'}
        </MainStyle.MainContainer>
        {!!data?.lectures.content?.length && !isLoading && (
          <PaginationPages
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default LecturePage
