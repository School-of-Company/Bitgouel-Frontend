import 광주자연과학고 from '../assets/png/schoolSymbols/광주자연과학고.png'
import 전남공고 from '../assets/png/schoolSymbols/전남공고.png'
import 숭의과학기술고 from '../assets/png/schoolSymbols/숭의과학기술고.png'
import 동일미래고 from '../assets/png/schoolSymbols/동일미래고.png'
import 전남여상 from '../assets/png/schoolSymbols/전남여상.png'
import 서진여고 from '../assets/png/schoolSymbols/서진여고.png'
import 광주공고 from '../assets/png/schoolSymbols/광주공고.png'
import 금파공고 from '../assets/png/schoolSymbols/금파공고.png'
import 송원여상 from '../assets/png/schoolSymbols/송원여상.png'
import 광주자동화설비공고 from '../assets/png/schoolSymbols/광주자동화설비공고.png'
import 광주소마고 from '../assets/png/schoolSymbols/광주소마고.png'
import 광주전자공고 from '../assets/png/schoolSymbols/광주전자공고.png'
import 광주여상 from '../assets/png/schoolSymbols/광주여상.png'

export const schoolToConstants: Record<string, string> = {
  광주공업고: 'GWANGJU_TECHNICAL_HIGH_SCHOOL',
  금파공업고: 'KUMPA_TECHNICAL_HIGH_SCHOOL',
  전남공업고: 'JEONNAM_TECHNICAL_HIGH_SCHOOL',
  광주여자상업고: 'GWANGJU_GIRLS_COMMERCIAL_HIGH_SCHOOL',
  전남여자상업고: 'JEONNAM_GIRLS_COMMERCIAL_HIGH_SCHOOL',
  광주자연과학고: 'GWANGJU_NATURAL_SCIENCE_HIGH_SCHOOL',
  광주전자공업고: 'GWANGJU_ELECTRONIC_TECHNICAL_HIGH_SCHOOL',
  동일미래과학고: 'DONGIL_HIGH_SCHOOL_OF_FUTURE_SCIENCE_HIGH_SCHOOL',
  서진여자고: 'SEOJIN_GIRLS_HIGH_SCHOOL',
  숭의과학기술고등학교: 'SUNGUI_SCIENCE_TECHNOLOGY_HIGH_SCHOOL',
  송원여자상업고: 'SONGWON_GIRLS_COMMERCIAL_HIGH_SCHOOL',
  광주자동화설비마이스터고: 'GWANGJU_AUTOMATIC_EQUIPMENT_TECHNICAL_HIGH_SCHOOL',
  광주소프트웨어마이스터고: 'GWANGJU_SOFTWARE_MEISTER_HIGH_SCHOOL',
}

export const SchoolIntroObjects = {
  schoolIntroFirst: [
    {
      number: 'IV',
      name: '광주자연과학고등학교',
      type: '농업생명/보건의료',
      img: 광주자연과학고,
      departments: ['식품과학과', '조리과학과', '애완동물과', '반려동물과'],
    },
    {
      number: 'II',
      name: '전남공업고등학교',
      type: '공업',
      img: 전남공고,
      departments: [
        '기계과',
        '전기과',
        '화학공업과',
        '화장품의약과',
        '드론공간정보과',
        '카페베이커리과',
        '건축과',
        '토목과',
      ],
    },
    {
      number: 'II',
      name: '숭의과학기술고등학교',
      type: '공업',
      img: 숭의과학기술고,
      departments: [
        '건축인테리어과',
        '자동차과',
        '스마트드론전자과',
        '전기과',
        '조리제빵과',
        '토탈뷰티과',
      ],
    },
    {
      number: 'II',
      name: '동일미래과학고등학교',
      type: '공업',
      img: 동일미래고,
      departments: [
        '스마트팩토리과',
        '전자에너지과',
        '광전자정보통신과',
        '뷰티디자인과',
        '토탈뷰티과',
      ],
    },
    {
      number: 'III',
      name: '전남여자상업고등학교',
      type: '상업',
      img: 전남여상,
      departments: [
        '공톡과정',
        '글로벌경영과',
        '글로벌금육과',
        '컨텐츠창업과',
        '영상콘텐츠과',
        '디자인콘텐츠과',
      ],
    },
    {
      number: 'IV',
      name: '서진여자고등학교',
      type: '농업생명/보건의료',
      img: 서진여고,
      departments: ['보통과', '간호과', '시각디자인과', '생활체육과'],
    },
  ],
  schoolIntroSecond: [
    {
      number: 'II',
      name: '광주공업고등학교',
      type: '공업',
      img: 광주공고,
      departments: [
        '스마트기계과',
        '기계시스템과',
        '에너지설비과',
        '자동차기계과',
        '도시공간정보과',
        '기계설비과',
        '건축과',
        '전기과',
        '전자과',
        '토목과',
        '정밀기계과',
      ],
    },
    {
      number: 'II',
      name: '금파공업고등학교',
      type: '공업',
      img: 금파공고,
      departments: [
        '항공기계과',
        '제과제빵화공과',
        'IOT 전기과',
        '바이오메디컬과',
        '생명화공과',
        '공통과',
        '첨단기계과',
      ],
    },
    {
      number: 'III',
      name: '송원여자상업고등학교',
      type: '상업',
      img: 송원여상,
      departments: [
        '메디컬복지과',
        '스마트경영과',
        '시킨테라피과',
        '영상미디어과',
      ],
    },
    {
      number: 'I',
      name: '광주자동화설비마이스터고등학교',
      type: '산업수요 맞춤형',
      img: 광주자동화설비공고,
      departments: ['자동차설비과'],
    },
    {
      number: 'I',
      name: '광주소프트웨어마이스터고등학교',
      type: '산업수요 맞춤형',
      img: 광주소마고,
      departments: [
        'SW개발과',
        '임베디드소프트웨어과',
        '인공지능과',
        '스마트 IOT과',
      ],
    },
    {
      number: 'II',
      name: '광주전자공업고등학교',
      type: '공업',
      img: 광주전자공고,
      departments: [
        '에너지환경과',
        '디자인과',
        '자동차과',
        '자동차기계과',
        '로봇자동화과',
      ],
    },
    {
      number: 'III',
      name: '광주여자상업고등학교',
      type: '상업',
      img: 광주여상,
      departments: [
        '공통과정',
        '글로벌비즈니스과',
        '스마트금융과',
        '스마트재산경영과',
      ],
    },
  ],
}
