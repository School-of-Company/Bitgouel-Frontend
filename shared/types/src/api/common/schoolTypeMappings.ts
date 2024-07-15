import { SchoolTypeEnum } from '../admin'

export const schoolTypeMappings: Record<string, SchoolTypeEnum> = {
  'I. 산업수요 맞춤형계열': 'CUSTOMIZED_INDUSTRIAL_DEMAND',
  'II. 공업계열': 'INDUSTRY',
  'III. 상업계열': 'COMMERCE',
  'IV. 농업생명/보건의료계열': 'AGRICULTURAL_LIFE_HEALTH_CARE',
}
