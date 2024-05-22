interface SortType {
  unsorted: boolean
  sorted: boolean
  empty: boolean
}

interface PageableType {
  sort: SortType
  pageSize: number
  pageNumber: number
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface PageTypes {
  pageable: PageableType
  totalPages: number
  totalElements: number
  last: boolean
  numberOfElements: number
  number: number
  sort: SortType
  first: boolean
  size: number
  empty: boolean
}
