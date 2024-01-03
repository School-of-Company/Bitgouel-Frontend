'use client'

import SelectCalendarModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/modals/SelectCalendarModal',
  component: SelectCalendarModal,
} as Meta<typeof SelectCalendarModal>

type Story = StoryObj<typeof SelectCalendarModal>

export const Primary: Story = {
  args: {
    date: new Date(),
  },
}
