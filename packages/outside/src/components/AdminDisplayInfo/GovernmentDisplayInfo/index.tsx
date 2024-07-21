import React from 'react';
import { DisplayBar, DisplayBarSpan } from '../style';

const GovernmentDisplayInfo = () => {
    return (
      <DisplayBar>
        <DisplayBarSpan width='32.5rem'>이름</DisplayBarSpan>
        <DisplayBarSpan width='auto'>분야</DisplayBarSpan>
      </DisplayBar>
    )
};

export default GovernmentDisplayInfo;