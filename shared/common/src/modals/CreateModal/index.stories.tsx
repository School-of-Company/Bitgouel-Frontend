'use client'

import CreateModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/modals/CreateModal',
  component: CreateModal,
} as Meta<typeof CreateModal>

type Story = StoryObj<typeof CreateModal>

export const LectureCreateModal: Story = {
  args: {
    question: '강의를 개설하시겠습니까?',
    title: '유저 리서치 - 사용자 경험 개선하기',
    createText: '개설하기',
  },
}

export const ActivityCreateModal: Story = {
  args: {
    question: '활동을 추가하시겠습니까?',
    title: '우리는 퍼블리셔입니다.',
    createText: '추가하기',
  },
}
