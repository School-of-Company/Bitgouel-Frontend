'use client'

import FilterModal from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/modals/FilterModal',
  component: FilterModal,
} as Meta<typeof FilterModal>

type Story = StoryObj<typeof FilterModal>

export const Primary: Story = {
  args: {
    title: '강의 유형',
    filterList: [
    { text: '전체', item: 'all', checked: true },
    {
      text: '상호학점인정교육과정',
      item: '상호학점인정교육과정',
      checked: false,
    },
    {
      text: '대학탐방프로그램',
      item: '대학탐방프로그램',
      checked: false,
    },
     {
      text: '유관기관프로그램',
      item: '유관기관프로그램',
      checked: false,
    },
    {
      text: '기업산학연계직업체험프로그램',
      item: '기업산학연계직업체험프로그램',
      checked: false,
    },
    ],
    onChange: () => {}
  }
}
