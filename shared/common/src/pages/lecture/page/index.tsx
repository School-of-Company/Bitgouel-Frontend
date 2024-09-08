'use client'

import { useGetLectureExcel, usePostLectureExcelUpload } from '@bitgouel/api'
import {
  Bg3,
  Filter,
  FilterModal,
  ListDocumentIcon,
  MainStyle,
  Plus,
  PrintIcon,
  excelDownload,
  handleErrorStatus,
  useFileUpload,
  useFilterSelect,
  useModal,
} from '@bitgouel/common'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

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

const errorStatusMap: { [key: number]: () => void } = {
  400: () => toast.error('셀 서식을 텍스트로 변경해주세요.'),
  404: () => toast.error('셀에 존재하지 않는 강사가 기재되어 있습니다.'),
}

const filterTitle: string = '강의 유형'

const LectureList = dynamic(
  () => import('../../../components/ListComponents/LectureList')
)

const LecturePage = ({ isAdmin }: { isAdmin: boolean }) => {
  const [lectureTypeFilter, setLectureTypeFilter] = useState<string>('')
  const { push } = useRouter()
  const { openModal } = useModal()
  const { filterList, onSelected } = useFilterSelect({
    title: filterTitle,
    defaultFilterList,
    setFilterPayload: setLectureTypeFilter,
  })

  const { refetch } = useGetLectureExcel({
    enabled: false,
  })

  const onDownload = async () => {
    try {
      const response = await refetch()
      if (response.error) throw response.error

      excelDownload({
        data: response.data,
        fileName: '강의 신청 명단',
        fileExtension: 'xlsx',
      })
    } catch (e) {
      e &&
        handleErrorStatus(e.response.status, {
          404: () => toast.error('취업 동아리 선생님이 배정되지 않았습니다.'),
        })
    }
  }

  const { mutate: upload } = usePostLectureExcelUpload({
    onSuccess: () => toast.success('강의 일괄 삽입을 성공했습니다.'),
    onError: ({ response }) =>
      response && handleErrorStatus(response.status, errorStatusMap),
  })

  const { onFileUpload } = useFileUpload(upload)

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
                <MainStyle.FileUploadLabel htmlFor='lectureUpload'>
                  <input
                    id='lectureUpload'
                    type='file'
                    accept='.xlsx, .xls, csv'
                    onChange={onFileUpload}
                  />
                  <ListDocumentIcon />
                  <span>강의 일괄 삽입</span>
                </MainStyle.FileUploadLabel>
                <MainStyle.SlideButton
                  onClick={() => push(`/main/lecture/create`)}
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
                    title={filterTitle}
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
        <LectureList lectureTypeFilter={lectureTypeFilter} />
      </MainStyle.MainWrapper>
    </MainStyle.PageWrapper>
  )
}

export default LecturePage
