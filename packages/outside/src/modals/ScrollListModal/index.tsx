import {
  CancelIcon,
  Portal,
  useModal
} from '@bitgouel/common'
import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  children: ReactNode
  title: '학교 선택' | '다른 목록 관리'
}

const ScrollListModal = ({ title, children }: Props) => {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.ScrollListModalWrapper>
        <S.ScrollTitleBox>
          <h3>{title}</h3>
          <div>
            <CancelIcon onClick={closeModal} />
          </div>
        </S.ScrollTitleBox>
        <S.ScrollListContainer>
          {children}
        </S.ScrollListContainer>
      </S.ScrollListModalWrapper>
    </Portal>
  )
}

export default ScrollListModal
