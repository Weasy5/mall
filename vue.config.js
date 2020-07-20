module.exports = {
  configureWebpack : {
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader",
        }
      ]
    },
    resolve:{
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
