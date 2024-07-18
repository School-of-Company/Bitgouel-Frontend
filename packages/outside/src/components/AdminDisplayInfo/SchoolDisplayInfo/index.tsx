import React from 'react'
import { DisplayBar, DisplayBarSpan } from '../style'

const SchoolDisplayInfo = () => {
  return (
    <DisplayBar gap={'4.75rem'}>
      <DisplayBarSpan width='15rem'>이름</DisplayBarSpan>
      <DisplayBarSpan width='10.5rem'>계열</DisplayBarSpan>
      <DisplayBarSpan width='10.5rem'>학과</DisplayBarSpan>
      <DisplayBarSpan width='auto'>동아리</DisplayBarSpan>
    </DisplayBar>
  )
}

export default SchoolDisplayInfo
