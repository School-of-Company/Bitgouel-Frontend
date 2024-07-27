import React from 'react';
import { DisplayBar, DisplayBarSpan } from '../style';

const CompanyDisplayInfo = () => {
    return (
        <DisplayBar gap='1.5rem'>
          <DisplayBarSpan width='35rem'>이름</DisplayBarSpan>
          <DisplayBarSpan width='31rem'>분야</DisplayBarSpan>
          <DisplayBarSpan width='4rem'>관리</DisplayBarSpan>
        </DisplayBar>
    );
};

export default CompanyDisplayInfo;