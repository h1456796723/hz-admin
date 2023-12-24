module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 1rem 等于 16px
      propList: ['*'], // 对所有属性进行转换
      selectorBlackList: [], // 不进行转换的选择器
      replace: true,
      mediaQuery: false,
      minPixelValue: 2
    }
  }
}