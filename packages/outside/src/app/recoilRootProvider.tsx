'use client'

import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

const RecoilRootProvider = ({ children }: { children: ReactNode }) => {
    return (
      <RecoilRoot>{children}</RecoilRoot>
    );
};

export default RecoilRootProvider