'use client'

import type { Meta, StoryObj } from '@storybook/react'
import PaginationPages from '.'

export default {
  title: 'common/components/PaginationPages',
  component: PaginationPages,
} as Meta<typeof PaginationPages>

type Story = StoryObj<typeof PaginationPages>

export const Primary: Story = {
  args: {
    pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    currentPage: 0,
    setCurrentPage: () => {},
    isFirst: false,
  },
}
