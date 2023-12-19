export interface PostCreatePayloadTypes {
  title: string
  content: string
  links: { url: string }[]
  feedType: 'EMPLOYMENT' | 'NOTICE'
}
