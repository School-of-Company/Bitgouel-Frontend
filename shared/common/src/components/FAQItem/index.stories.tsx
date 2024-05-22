'use client'

import type { Meta, StoryObj } from '@storybook/react'
import FAQItem from '.'

export default {
  title: 'common/components/FAQItem',
  component: FAQItem,
} as Meta<typeof FAQItem>

type Story = StoryObj<typeof FAQItem>

export const Primary: Story = {
  args: {
    question: '학원에서 자격증 과정을 운영할 수 있나요?',
    answer: '직업계고 중 소수의 학과가 운영되는 경우 수강인원 확보가 어려워 대학연계를 지원하지 못하였습니다. 참여 학생의 수강신청을 담보할 수 없는 상황에서 무리한 교육과정 개설은 신청 미달 시 지역대학에게 부담이 될 수 있기에 이러한 결정을 내렸습니다.'
  }
}
