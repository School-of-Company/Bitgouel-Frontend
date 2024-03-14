'use client'

import InquiryItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/InquiryItem',
  component: InquiryItem,
} as Meta<typeof InquiryItem>

type Story = StoryObj<typeof InquiryItem>

export const AnswerInquiryItem: Story = {
  args: {
    item: {
      id: '1234',
      question: '이상해요',
      userId: '1234',
      username: '홍길동',
      createdAt: '2024-01-01',
      answerStatus: 'ANSWERED'
    }
  }
}

export const UnAnswerInquiryItem: Story = {
  args: {
    item: {
      id: '1234',
      question: '이상해요',
      userId: '1234',
      username: '홍길동',
      createdAt: '2024-01-01',
      answerStatus: 'UNANSWERED'
    }
  }
}