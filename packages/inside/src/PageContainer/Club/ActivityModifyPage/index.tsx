'use client'

import * as S from './style'
import Bg2 from '@bitgouel/common/src/assets/png/mainBg2.png'
import { Chevron } from '@bitgouel/common'
import { ChangeEvent, useState } from 'react'
import { SelectCalendarModal, SelectScoreModal } from '@bitgouel/common'
import { useSearchParams } from 'next/navigation'
import { useGetActivityDetail, usePatchActivityCorrection } from '@bitgouel/api'
import { ActivityDetailTypes } from '@bitgouel/types'

const ActivityModifyPage = ({ activity_Id }: { activity_Id: string }) => {
  const MAXLENGTH: number = 1000 as const

  const { data } = useGetActivityDetail(activity_Id)
  const { mutate } = usePatchActivityCorrection(activity_Id)

  const [isActivityDate, setIsActivityDate] = useState<boolean>(false)
  const [activityDate, setActivityDate] = useState<Date>(new Date())
  const [activityDateText, setActivityDateText] = useState<string | any>(
    data?.data.activityDate
  )

  const [isScore, setIsScore] = useState<boolean>(false)
  const [scoreText, setScoreText] = useState<string | any>(data?.data.credit)
  const [modifyData, setModifyData] = useState<ActivityDetailTypes | any>(data)

  console.log(modifyData)
  console.log(modifyData)

  const openSelectModal = (type: string) => {
    if (type === '학점 선택') {
      setIsActivityDate(false)
      setIsScore((prev) => !prev)
    } else {
      setIsActivityDate((prev) => !prev)
      setIsScore(false)
    }
  }

  const params = useSearchParams()
  console.log(params.get('title'))

  const onModifyData = () => {
    mutate({
      title: modifyData.title,
      content: modifyData.content,
      credit: +scoreText.slice(0, 1),
      activityDate: `${activityDate.getFullYear()}-${(
        activityDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${activityDate
        .getDate()
        .toString()
        .padStart(2, '0')}`,
    })
  }

  return (
    <div>
      <S.SlideBg url={Bg2}>
        <S.BgContainer>
          <S.ModifyTitle>활동 수정</S.ModifyTitle>
          <S.ButtonContainer></S.ButtonContainer>
        </S.BgContainer>
      </S.SlideBg>
      <S.DocumentInputContainer>
        <S.DocumentInput>
          <S.InputTitle
            placeholder='활동 제목(100자 이내)'
            maxLength={100}
            value={data?.data.title}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setModifyData((prev) => ({ ...prev, title: event.target.value }))
            }
          />
          <S.InputMainText
            maxLength={MAXLENGTH}
            placeholder='활동 내용 작성 (1000자 이내)'
            value={data?.data.content}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setModifyData((prev) => ({
                ...prev,
                content: event.target.value,
              }))
            }
          />
          <S.ActivitySetting>
            <S.SettingTitle>활동 세부 설정</S.SettingTitle>
            <S.SettingSelectionContainer>
              <S.SettingSelection>
                <S.SelectModalContainer>
                  {isActivityDate && (
                    <SelectCalendarModal
                      date={activityDate}
                      setDate={setActivityDate}
                      setText={setActivityDateText}
                    />
                  )}
                  <S.SettingDateBox onClick={() => openSelectModal('')}>
                    <Chevron />
                    <S.SettingButton>{activityDateText}</S.SettingButton>
                  </S.SettingDateBox>
                </S.SelectModalContainer>
              </S.SettingSelection>
              <S.SettingSelection>
                <S.SelectModalContainer>
                  {isScore && (
                    <SelectScoreModal
                      score={scoreText}
                      setScore={setScoreText}
                      setIsScore={setIsScore}
                    />
                  )}
                  <S.SettingScoreBox
                    onClick={() => openSelectModal('학점 선택')}
                  >
                    <Chevron />
                    <S.SettingButton>{scoreText}</S.SettingButton>
                  </S.SettingScoreBox>
                </S.SelectModalContainer>
              </S.SettingSelection>
            </S.SettingSelectionContainer>
          </S.ActivitySetting>
          <S.ButtonContainer>
            <S.CreateButton onClick={onModifyData}>
              활동 수정하기
            </S.CreateButton>
          </S.ButtonContainer>
        </S.DocumentInput>
      </S.DocumentInputContainer>
    </div>
  )
}

export default ActivityModifyPage
