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
    isApprove: true,
    question: '강의를 개설하시겠습니까?',
    title: '유저 리서치 - 사용자 경험 개선하기',
    purpose: '개설하기',
  },
}
