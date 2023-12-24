module.exports = {
  preset: [
    [
      '@babel/preset-env',
      {
        target: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    'transform-es2015-modules-commonjs'
  ]
}