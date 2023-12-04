import { StaticImageData } from 'next/image'

export interface SchoolIntroProps {
  item: {
    number: string
    name: string
    type: string
    img: StaticImageData
    departments: string[]
  }
}
