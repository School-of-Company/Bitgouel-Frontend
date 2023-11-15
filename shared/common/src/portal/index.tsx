'use client'

import ReactDOM from 'react-dom'
import {
  cloneElement,
  MouseEvent,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import styled from '@emotion/styled'

const Portal = ({
  children,
  onClose,
}: {
  children: ReactElement
  onClose: () => void
}) => {
  const [isCSR, setIsCSR] = useState(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  if (typeof window === 'undefined' || !isCSR) return <></>

  const el = document.getElementById('modal')
  if (!el) throw new Error('Not Found Modal')

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <ModalWrapper onClick={onClose}>
      {cloneElement(children, { onClick })}
    </ModalWrapper>,
    el
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Portal
