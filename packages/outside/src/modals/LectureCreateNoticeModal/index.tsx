'use client'

import Portal from '@bitgouel/common/src/portal'
import * as S from './style'
import { useModal } from '@bitgouel/common/src/hooks'
import { useRouter } from 'next/navigation'

const LectureCreateNoticeModal = () => {
  const { closeModal } = useModal()
  const router = useRouter()

  return (
    <Portal onClose={closeModal}>
      <S.LectureCreateNoticeModal>
        <S.NoticeLetterBox>
          <S.NoticeMainLetter>
            강의 개설 신청이 완료되었습니다.
          </S.NoticeMainLetter>
          <S.NoticeSubLetter>관리자의 승인을 기다려주세요.</S.NoticeSubLetter>
        </S.NoticeLetterBox>
        <S.ReturnLectureListButton
          onClick={() => {
            closeModal()
            router.push('/main/lecture')
          }}
        >
          강의 목록으로
        </S.ReturnLectureListButton>
      </S.LectureCreateNoticeModal>
    </Portal>
  )
}

export default LectureCreateNoticeModal
