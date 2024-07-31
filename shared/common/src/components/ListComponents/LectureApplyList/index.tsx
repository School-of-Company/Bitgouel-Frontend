'use client'

import {
  lectureQueryKeys,
  useGetLectureApplyList,
  usePatchApplyComplete,
} from '@bitgouel/api'
import LectureApplyItem from '../../LectureApplyItem'
import * as S from './style'
import {
  AppropriationModal,
  handleSelect,
  NoneResult,
  useModal,
  WaitingAnimation,
} from '@bitgouel/common'
import ApplyDisplayInfo from './ApplyDisplayInfo'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { useQueryClient } from '@tanstack/react-query'

const LectureApplyList = ({ lectureId }: { lectureId: string }) => {
  const { data, isLoading } = useGetLectureApplyList(lectureId)
  const [studentIds, setStudentIdss] = useState<string[]>([])
  const { openModal, closeModal } = useModal()
  const queryClient = useQueryClient()

  const { mutate } = usePatchApplyComplete(lectureId, studentIds, {
    onSuccess: () => {
      queryClient.invalidateQueries(
        lectureQueryKeys.getLectureApplyList(lectureId)
      )
      closeModal()
      toast.success('이수를 확정하였습니다.')
    },
  })

  const handleOpenModal = () => {
    if (studentIds.length === 0) return toast.info('학생을 선택해주세요.')

    openModal(
      <AppropriationModal
        isApprove={true}
        question='이수를 확정시키겠습니까?'
        title=''
        purpose='확정하기'
        onAppropriation={(callbacks) => mutate(undefined, callbacks)}
      />
    )
  }

  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      setStudentIdss(data?.students.map((student) => student.id))
    else setStudentIdss([])
  }

  const handleSelectStudents = (checked: boolean, userId: string) =>
    handleSelect({ checked, id: userId, setIds: setStudentIdss })

  return (
    <>
      <ApplyDisplayInfo onAll={onAll} handleOpenModal={handleOpenModal} />
      <S.ApplyListContainer>
        {isLoading && <WaitingAnimation title={'강의 신청자를'} />}
        {!isLoading && data?.students && data.students.length <= 0 && (
          <NoneResult title={'강의 신청자가'} />
        )}
        {data?.students.map((student) => (
          <LectureApplyItem
            key={student.id}
            item={student}
            lectureId={lectureId}
          />
        ))}
      </S.ApplyListContainer>
    </>
  )
}

export default LectureApplyList
