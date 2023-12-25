import setting from '../setting'

export const isExprice = (): boolean => {
  const { tokenExpires } = setting
  const time = tokenExpires * 24 * 60 * 60 * 1000
  const now = new Date().getTime()
  const expire = Number(window.localStorage.getItem('expire')) || 0
  return now > expire + time
}