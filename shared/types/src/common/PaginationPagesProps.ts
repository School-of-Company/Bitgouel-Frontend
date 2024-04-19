import { Dispatch } from 'react'

export interface PaginationPagesProps {
  pages: number[]
  currentPage: number
  setCurrentPage: Dispatch<React.SetStateAction<number>>
}
