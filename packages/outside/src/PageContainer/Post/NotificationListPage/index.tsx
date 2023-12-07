'use client'

import { MegaPhone, Plus, Question } from '@bitgouel/common'
import { PostItem } from '@bitgouel/common/src/components'
import Bg1 from '@bitgouel/common/src/assets/png/mainBg1.png'
import * as S from './style'

const NotificationPage = () => {
  return (
    <div>
      <S.SlideBg url={Bg1}>
        <S.BgContainer>
          <S.NotificationTitle>공지 목록</S.NotificationTitle>
          <S.ButtonContainer>
            <S.NotificationButton>
              <Plus />
              <span>공지 추가</span>
            </S.NotificationButton>
          </S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.NotificationListWrapper>
        <S.NotificationListContainer>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </S.NotificationListContainer>
      </S.NotificationListWrapper>
    </div>
  )
}

export default NotificationPage
