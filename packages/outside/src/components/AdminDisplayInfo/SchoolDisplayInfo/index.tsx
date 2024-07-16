import React from 'react'
import { DisplayBar, DisplayBarSpan } from '../style'

const SchoolDisplayInfo = () => {
  return (
    <DisplayBar>
      <DisplayBarSpan width='15rem'>이름</DisplayBarSpan>
      <DisplayBarSpan width='10.5rem'>계열</DisplayBarSpan>
    </DisplayBar>
  )
}

export default SchoolDisplayInfo
