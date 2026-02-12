module.exports = {
  banner: true,
  input: 'src/index.js',
  output: {
    fileName: 'index[min][ext]',
    format: ['cjs', 'umd', 'umd-min'],
    moduleName: 'VueEasyCarousel',
    extractCSS: false,
  },
  plugins: {
    vue: {
      css: true
    }
  }
};
