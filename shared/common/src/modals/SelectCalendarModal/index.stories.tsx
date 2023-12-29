'use client'

import SelectCalendarTimeModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/modals/SelectCalendarTimeModal',
  component: SelectCalendarTimeModal,
} as Meta<typeof SelectCalendarTimeModal>

type Story = StoryObj<typeof SelectCalendarTimeModal>

export const Primary: Story = {
  args: {
    date: new Date(),
  },
}
