// import { formatNumber } from '../src/utils/index'
import { mount } from '@vue/test-utils'
// test('格式化数字123456显示为123,456', () => {
//   expect(formatNumber('123456')).toBe('123,456');
// })

const App = { template: '<div>hello</div>' }
test('测试 vue3 组件', () => {
  const wrapper = mount(App)
  console.log(wrapper.text())
})