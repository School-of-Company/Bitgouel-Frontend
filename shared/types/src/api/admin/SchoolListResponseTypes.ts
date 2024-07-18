export type LineEnum =
  | 'INDUSTRY'
  | 'COMMERCE'
  | 'AGRICULTURAL_LIFE_HEALTH_CARE'
  | 'CUSTOMIZED_INDUSTRIAL_DEMAND'

export type FieldEnum =
  | 'FUTURISTIC_TRANSPORTATION_EQUIPMENT'
  | 'ENERGY'
  | 'MEDICAL_HEALTHCARE'
  | 'AI_CONVERGENCE'
  | 'CULTURE'

export interface ClubsType {
  id: string
  name: string
  field: FieldEnum
}

export interface SchoolsType {
  id: number
  schoolName: string
  line: LineEnum
  departments: { name: string }[]
  logoImageUrl: string // multipart-url
  clubs: ClubsType[]
}

export interface SchoolListResponseTypes {
  schools: SchoolsType[]
}
