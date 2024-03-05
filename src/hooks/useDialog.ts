import { App, createApp } from 'vue'
import Dialog from '@/components/Dialog.vue'

const useDialog = <T>(content: string, title: string, confirmText: string): Promise<T | string> => {
  return new Promise((resolve, reject) => {
    const mountNode = document.createElement('div')
    let dialogApp: App<Element> | undefined = createApp(Dialog, {
      visible: true,
      content,
      title,
      confirmText,
      close: () => {
        if (dialogApp) {
          dialogApp.unmount()
          document.body.removeChild(mountNode)
          dialogApp = undefined
          reject('close')
        }
      },
      confirm: (res: T) => {
        if (dialogApp) {
          dialogApp.unmount()
          document.body.removeChild(mountNode)
          dialogApp = undefined
          resolve(res)
        }
      }
    })
    document.body.appendChild(mountNode)
    dialogApp.mount(mountNode)
  })
}

export default useDialog