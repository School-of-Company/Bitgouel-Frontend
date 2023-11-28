'use client'

import ApproveModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/modals/ApproveModal',
  component: ApproveModal,
} as Meta<typeof ApproveModal>

type Story = StoryObj<typeof ApproveModal>

export const LectureApproveModal: Story = {
  args: {
    type: '강의 개설',
    title: '유저 리서치 - 사용자 경험 개선하기',
  },
}

export const ActivityApproveModal: Story = {
  args: {
    type: '활동 추가',
    title: '우리는 퍼블리셔입니다.',
  },
}
