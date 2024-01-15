export const sliceDateTime = (date?: string): string => {
  return `${date?.slice(0, 4)}년 ${date?.slice(5, 7)}월 ${date?.slice(
    8,
    10
  )}일 ${date?.slice(11, 16)}`
}

export const sliceDate = (date?: string): string => {
  return `${date?.slice(0, 4)}년 ${date?.slice(5, 7)}월 ${date?.slice(8, 10)}일`
}
