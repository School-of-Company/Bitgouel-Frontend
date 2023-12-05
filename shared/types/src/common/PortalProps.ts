import { ReactElement } from 'react'

export interface PortalProps {
  children: ReactElement
  onClose: () => void
}
