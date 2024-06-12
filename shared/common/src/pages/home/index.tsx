'use client'

import { FAQSection } from '@bitgouel/common'
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
} from './HomeSection'

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#f6f6f6' }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <FAQSection />
      <Section8 />
    </div>
  )
}

export default HomePage
