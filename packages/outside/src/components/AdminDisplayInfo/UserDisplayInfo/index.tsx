import { DisplayBar, DisplayBarSpan } from '../style'

const UserDisplayInfo = () => {
  return (
    <DisplayBar>
      <DisplayBarSpan width='6rem'>이름</DisplayBarSpan>
      <DisplayBarSpan width='8rem'>직업</DisplayBarSpan>
      <DisplayBarSpan width='9rem'>전화번호</DisplayBarSpan>
      <DisplayBarSpan width='9rem'>가입년도 (가입 당시 학년)</DisplayBarSpan>
      <DisplayBarSpan width='auto'>이메일</DisplayBarSpan>
    </DisplayBar>
  )
}

export default UserDisplayInfo
