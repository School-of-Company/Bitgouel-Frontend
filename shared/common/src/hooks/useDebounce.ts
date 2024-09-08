import { useCallback } from 'react'
import _ from 'lodash'

const useDebounce = (callback: () => void, delay: number) => {
  const debouncedCallback = useCallback(
    _.debounce(() => {
      callback()
    }, delay),
    [callback, delay]
  )

  return debouncedCallback
}

export default useDebounce
