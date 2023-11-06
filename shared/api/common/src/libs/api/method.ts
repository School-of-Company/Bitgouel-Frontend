import { apiInstance } from './instance'

export const del = async <T>(...args: Parameters<typeof apiInstance.delete>) =>
  await apiInstance.delete<T, T>(...args)

export const get = async <T>(...args: Parameters<typeof apiInstance.get>) =>
  await apiInstance.get<T, T>(...args)

export const patch = async <T>(...args: Parameters<typeof apiInstance.patch>) =>
  await apiInstance.patch<T, T>(...args)

export const post = async <T>(...args: Parameters<typeof apiInstance.post>) =>
  await apiInstance.post<T, T>(...args)
