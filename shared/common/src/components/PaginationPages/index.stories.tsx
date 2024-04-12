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
    currentPage: 6,
    isFirst: false,
    isLast: false,
    slicePages: [6, 7, 8, 9, 10],
    onPrevPage(isDouble) {},
    onNextPage(isDouble) {},
    onPageClick() {},
  },
}
