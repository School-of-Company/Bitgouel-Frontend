import { FieldEnum, LineEnum } from '@bitgouel/types'

export const LineEnumToKor: Record<LineEnum, string> = {
  INDUSTRY: '공업계열',
  COMMERCE: '상업계열',
  AGRICULTURAL_LIFE_HEALTH_CARE: '농업생명/보건의료계열',
  CUSTOMIZED_INDUSTRIAL_DEMAND: '산업수요 맞춤형계열',
} as const

export const LineToEnum: Record<string, LineEnum> = {
  '공업계열': 'INDUSTRY',
  '상업계열': 'COMMERCE',
  '농업생명/보건의료계열': 'AGRICULTURAL_LIFE_HEALTH_CARE',
  '산업수요 맞춤형계열': 'CUSTOMIZED_INDUSTRIAL_DEMAND',
} as const

export const FieldEnumToKor: Record<FieldEnum, string> = {
  FUTURISTIC_TRANSPORTATION_EQUIPMENT: '미래형 운송기기',
  ENERGY: '에너지 산업',
  MEDICAL_HEALTHCARE: '의료 헬스케어',
  AI_CONVERGENCE: 'AI 융복합',
  CULTURE: '문화산업',
} as const

export const FieldToEnum: Record<string, FieldEnum> = {
  '미래형 운송기기': 'FUTURISTIC_TRANSPORTATION_EQUIPMENT',
  '에너지 산업': 'ENERGY',
  '의료 헬스케어': 'MEDICAL_HEALTHCARE',
  'AI 융복합': 'AI_CONVERGENCE',
  '문화산업': 'CULTURE',
} as const