'use client'

import LectureApplyModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'inside/LectureApplyModal',
  component: LectureApplyModal,
} as Meta<typeof LectureApplyModal>

type Story = StoryObj<typeof LectureApplyModal>

export const Primary: Story = {
  args: {
    title: '청춘'
  }
}
