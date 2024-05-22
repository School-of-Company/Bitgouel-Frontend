'use client'

import LectureItem from '.'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'common/components/LectureItem',
  component: LectureItem,
} as Meta<typeof LectureItem>

type Story = StoryObj<typeof LectureItem>

export const Primary: Story = {
  args: {
    item: {
      id: '2345678',
      name: '유저 리서치 - 사용자 경험 개선하기',
      content:
        '청춘! 이는 듣기만 하여도 가슴이 설레는 말이다. 청춘! 너의 두 손을 가슴에 대고, 물방아 같은 심장의 고동을 들어 보라. 청춘의 피는 끓는다. 끓는 피에 뛰노는 심장은 거선(巨船)의 기관(汽罐)같이 힘있다. 이것이다. 인류의 역사를 꾸며 내려온 동력은 바로 이것이다. 이성(理性)은 투명하되 얼음과 같으며, 지혜는 날카로우나 갑 속에 든 칼이다. 청춘의 끓는 피가 아니더면, 인간이 얼마나 쓸쓸하랴? 얼음에 싸인 만물(萬物)은 죽음이 있을 뿐이다.',
      semester: 'FIRST_YEAR_FALL_SEMESTER',
      division: 'AI_CONVERGENCE',
      department: 'A.I융합기계과',
      line: '기계',
      startDate: '2023-09-23T14:30:00',
      endDate: '2023-09-24T14:30:00',
      lectureType: 'MUTUAL_CREDIT_RECOGNITION_PROGRAM',
      lectureStatus: 'OPEN',
      headCount: 23,
      maxRegisteredUser: 50,
      lecturer: '박주홍',
    },
  },
}
