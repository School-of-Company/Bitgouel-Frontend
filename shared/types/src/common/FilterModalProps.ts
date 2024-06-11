import { FilterListTypes } from './FilterListTypes'
import { onSelectedParameter } from './onSelectedParameter'

export interface FilterModalProps {
  title: string
  filterList: FilterListTypes[]
  onSelected: (parameter: onSelectedParameter) => void
}
