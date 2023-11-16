'use client'

import * as S from './style'

const ActivityItem = () => {
  return (
    <S.ActivityItemWrapper>
      <S.TextContainer>
        <div>
          <S.AcitivTitle>* 오늘의 일기 *</S.AcitivTitle>
        </div>
        <div>
          <S.MainText>
            오늘도 사람을 산 채로 갈아서 디자인하기 강의를 들었다.
          </S.MainText>
        </div>
      </S.TextContainer>
      <div>
        <S.Number>1점 수여</S.Number>
        <S.Number>•</S.Number>
        <S.Number>2023.11.09</S.Number>
      </div>
    </S.ActivityItemWrapper>
  )
}
export default ActivityItem
