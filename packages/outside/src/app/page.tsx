import { HomePage } from '@bitgouel/common'
import { getFaq } from '@outside/api'

const Home = async () => {
  const faqs = await getFaq()
  return <HomePage faqInitialData={faqs} />
}

export default Home