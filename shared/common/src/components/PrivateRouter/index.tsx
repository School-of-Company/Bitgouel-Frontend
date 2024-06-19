'use client'

import { AuthorityContext } from '@bitgouel/common';
import { useRouter } from 'next/navigation';
import { ReactElement, useContext, useEffect } from 'react';

const PrivateRouter = ({ children, isRedirect }: { children: ReactElement, isRedirect: boolean }) => {
  const authority = useContext(AuthorityContext)
  
  useEffect(() => {
    if (!authority.length) return
    if (isRedirect) window.location.replace(`/not-found`)
  }, [isRedirect, authority])

  return <>{ children }</>
};

export default PrivateRouter;