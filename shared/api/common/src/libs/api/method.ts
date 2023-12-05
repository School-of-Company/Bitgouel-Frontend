import { instance } from './instance'

export const del = async <T>(...args: Parameters<typeof instance.delete>) =>
  await instance.delete<T, T>(...args)

export const get = async <T>(...args: Parameters<typeof instance.get>) =>
  await instance.get<T, T>(...args)

export const patch = async <T>(...args: Parameters<typeof instance.patch>) =>
  await instance.patch<T, T>(...args)

export const post = async <T>(...args: Parameters<typeof instance.post>) =>
  await instance.post<T, T>(...args)
