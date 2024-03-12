export type DivisionEnum =
  | 'AUTOMOBILE_INDUSTRY'
  | 'ENERGY_INDUSTRY'
  | 'MEDICAL_HEALTHCARE'
  | 'AI_CONVERGENCE'
  | 'CULTURAL_INDUSTRY'

export interface LinePayloadTypes {
  keyword: string
  division: DivisionEnum
}
