'use client'

import {
  lectureQueryKeys,
  useGetLectureApplyList,
  usePatchApplyComplete,
} from '@bitgouel/api'
import {
  AppropriationModal,
  CompleteIcon,
  CompoundListItemComponent,
  handleSelect,
  NoneResult,
  useModal,
  WaitingAnimation,
} from '@bitgouel/common'
import { useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import ApplyDisplayInfo from './ApplyDisplayInfo'
import * as S from './style'

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
    if (e.target.checked) {
      const notCompleteStudents = data?.students.filter(
        (student) => !student.isComplete
      )
      setStudentIdss(notCompleteStudents?.map((student) => student.id))
    } else setStudentIdss([])
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
        {data?.students.map((student) => {
          const otherItemList: { width: string; text: string }[] = [
            { width: '15rem', text: student.school },
            {
              width: '5rem',
              text: `${student.grade}반 ${student.classNumber}반`,
            },
            { width: 'auto', text: student.clubName },
          ]

          return (
            <CompoundListItemComponent>
              <CompoundListItemComponent.AdminCheckboxItemContainer>
                {!student.isComplete && (
                  <CompoundListItemComponent.AdminItemCheckboxName
                    checkList={studentIds}
                    checkItem={student.id}
                    handleSelectCheck={handleSelectStudents}
                    name={student.name}
                    nameWidth='6rem'
                  />
                )}
                {student.isComplete && (
                  <S.CompleteName>
                    <CompleteIcon />
                    <S.Name>{student.name}</S.Name>
                  </S.CompleteName>
                )}
                {otherItemList.map((item) => (
                  <CompoundListItemComponent.OtherItem
                    key={item.text}
                    width={item.width}
                    text={item.text}
                  />
                ))}
              </CompoundListItemComponent.AdminCheckboxItemContainer>
            </CompoundListItemComponent>
          )
        })}
      </S.ApplyListContainer>
    </>
  )
}

export default LectureApplyList
