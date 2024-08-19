'use client'

import {
  useGetLectureApplyList,
  usePatchApplyComplete
} from '@bitgouel/api'
import {
  ApplyDetailModal,
  AppropriationModal,
  CompleteIcon,
  CompoundListItemComponent,
  handleSelect,
  NoneResult,
  useModal,
  WaitingAnimation,
} from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from '../style'
import ApplyDisplayInfo from './ApplyDisplayInfo'

const LectureApplyList = ({ lectureId }: { lectureId: string }) => {
  const { data, refetch, isLoading } = useGetLectureApplyList(lectureId, false)
  const [studentIds, setStudentIds] = useState<string[]>([])
  const { openModal, closeModal } = useModal()

  const { mutate } = usePatchApplyComplete(lectureId, studentIds, {
    onSuccess: () => {
      refetch()
      closeModal()
      toast.success('이수 완료했습니다.')
    },
  })

  const handleOpenModal = () => {
    if (studentIds.length === 0) return toast.info('학생을 선택해주세요.')

    openModal(
      <AppropriationModal
        isApprove={true}
        question='이수 완료하시겠습니까?'
        title=''
        purpose='완료하기'
        onAppropriation={(callbacks) => mutate(undefined, callbacks)}
      />
    )
  }

  const onAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      setStudentIds(data?.students.map((student) => student.id) || [])
    else setStudentIds([])
  }

  const handleSelectStudents = (checked: boolean, userId: string) =>
    handleSelect({ checked, id: userId, setIds: setStudentIds })

  const onDetailModal = (studentId: string) => {
    openModal(<ApplyDetailModal lectureId={lectureId} studentId={studentId} />)
  }

  return (
    <>
      <ApplyDisplayInfo onAll={onAll} handleOpenModal={handleOpenModal} />
      <S.ApplyListContainer>
        {isLoading && <WaitingAnimation title={'강의 신청 명단을'} />}
        {!isLoading && data?.students && data.students.length <= 0 && (
          <NoneResult title={'강의 신청 명단이'} />
        )}
        {data?.students.map((student) => {
          const otherItemList: { width: string; text: string }[] = [
            { width: '15rem', text: student.school },
            {
              width: '5rem',
              text: `${student.grade}학년 ${student.classNumber}반`,
            },
            { width: 'auto', text: student.clubName },
          ]

          return (
              <CompoundListItemComponent>
                <CompoundListItemComponent.AdminCheckboxItemContainer onClick={() => onDetailModal(student.id)}>
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
