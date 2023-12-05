'use client'

import RejectModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/modals/RejectModal',
  component: RejectModal,
} as Meta<typeof RejectModal>

type Story = StoryObj<typeof RejectModal>

export const LectureRejectModal: Story = {
  args: {
    type: '강의 개설',
    title: '유저 리서치 - 사용자 경험 개선하기',
  },
}

export const ActivityRejectModal: Story = {
  args: {
    type: '활동 추가',
    title: '우리는 퍼블리셔입니다.',
  },
}
