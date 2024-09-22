import { HomePage } from '@bitgouel/common'
import { getFaq } from '@inside/api'

export default async function Home() {
  const faqs = await getFaq()
  return <HomePage faqInitialData={faqs} />
}
