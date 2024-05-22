import { faqQueryKeys, faqUrl, post } from '@bitgouel/api'
import { FAQTypes } from '@bitgouel/types'
import { UseMutationOptions, useMutation } from '@tanstack/react-query'

export const usePostQuestion = (
  options: UseMutationOptions<void, Error, FAQTypes>
) =>
  useMutation<void, Error, FAQTypes>(
    faqQueryKeys.postQuestion(),
    (value) => post(faqUrl.faq(), value),
    options
  )
