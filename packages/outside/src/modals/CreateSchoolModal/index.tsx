import { CancelIcon, Portal, useModal } from '@bitgouel/common'
import { SchoolItem, SchoolClubInput } from '@outside/components'

import * as S from './style'

import SearchLectureType from './SearchSchoolType'
import CreateClubItem from './CreateClubItem'

const CreateSchoolModal = () => {
  const { closeModal } = useModal()

  return (
    <Portal onClose={closeModal}>
      <S.CreateSchoolModalWrapper>
        <S.TitleWrapper>
          <S.TitleContainer>
            <S.Title>새로운 학교 등록</S.Title>
            <S.CancelIcon>
              <CancelIcon />
            </S.CancelIcon>
          </S.TitleContainer>
        </S.TitleWrapper>
        <S.CreateSchoolModalContainer>
          <S.SelectWrapper>
            <S.SchoolContainer>
              <S.Content>학교 이름</S.Content>
              <SchoolItem placeholder='학교 이름 입력 (ex: 숭의과학기술고등학교)' />
            </S.SchoolContainer>
            <S.SchoolContainer>
              <S.Content>학교 계열</S.Content>
              <SearchLectureType />
            </S.SchoolContainer>
            <S.SchoolContainer>
              <S.Content>학교 학과</S.Content>
              <SchoolItem placeholder='쉼표로 구분해 학과 작성 (ex: 스마트 IOT과, 소프트웨어 개발과)' />
            </S.SchoolContainer>
            <S.SchoolContainer>
              <S.Content>동아리</S.Content>
              <S.ClubItemContainer>
                <CreateClubItem placeholder='동아리 이름 입력(ex: dev gsm)' />
              </S.ClubItemContainer>
            </S.SchoolContainer>
          </S.SelectWrapper>
        </S.CreateSchoolModalContainer>
      </S.CreateSchoolModalWrapper>
    </Portal>
  )
}

export default CreateSchoolModal
