export type SchoolTypeEnum =
  | 'CUSTOMIZED_INDUSTRIAL_DEMAND' // 산업수요 맞춤형
  | 'INDUSTRY' // 공업
  | 'COMMERCE' // 상업
  | 'AGRICULTURAL_LIFE_HEALTH_CARE' // 농업, 보건

export const schoolTypeMappings: Record<string, SchoolTypeEnum> = {
  'I. 산업수요 맞춤형계열': 'CUSTOMIZED_INDUSTRIAL_DEMAND',
  'II. 공업계열': 'INDUSTRY',
  'III. 상업계열': 'COMMERCE',
  'IV. 농업생명/보건의료계열': 'AGRICULTURAL_LIFE_HEALTH_CARE',
}

interface RegistrationProps {
  name: string
  line: SchoolTypeEnum | ''
  departments: string[]
}

export interface RegistrationTypes {
  webRequest: RegistrationProps
  logoImage: FormData | null
}
