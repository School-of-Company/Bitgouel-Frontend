// 2024-01-01'T'12:34:00 -> 2024년 1월 1일 12:34
export const dateToConverter = (date: string): string => {
  return `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(
    8,
    10
  )}일 ${date.slice(11, 16)}`
}

// 2024-01-01'T'12:34:00 -> 2024년 1월 1일
export const dateToRemoveTime = (date: string): string =>
  `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일`

// 2024-01-01'T'12:34:00 -> 2024년 1월 1일 12시 34분
export const dateToConverterKor = (date: string): string =>
  `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(
    8,
    10
  )}일 ${date.slice(11, 13)}시 ${date.slice(14, 16)}분`

// 2024-01-01, 12:34:00  -> 2024년 1월 1일 12시 34분
export const dateToConverterKorAddTime = (
  date: string,
  time: string
): string => `
  ${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(
  8,
  10
)}일 ${time.slice(0, 2)}시 ${time.slice(3, 5)}분
  `

// 12:34:00 -> 12시 34분
export const timeToConverter = (time: string): string =>
  `${time.slice(0, 2)}시 ${time.slice(3, 5)}분`
