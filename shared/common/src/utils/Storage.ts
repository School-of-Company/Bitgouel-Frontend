export const getStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}

export const setStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value)
  }
}

export const removeStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key)
  }
}
