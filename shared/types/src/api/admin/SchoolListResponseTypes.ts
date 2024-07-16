import { DivisionsResponseTypes } from "../common"

export interface ClubsType {
  id: string
  clubName: string
  field:
    | 'FUTURISTIC_TRANSPORTATION_EQUIPMENT'
    | 'ENERGY'
    | 'MEDICAL_HEALTHCARE'
    | 'AI_CONVERGENCE'
    | 'CULTURE'
}

export interface SchoolsType {
  id: number
  schoolName: string
  line: DivisionsResponseTypes
  department: { name: string }[]
  logoImageUrl: string // multipart-url
  clubs: ClubsType[]
}

export interface SchoolListResponseTypes {
  schools: SchoolsType[]
}
