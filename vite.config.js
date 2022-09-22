import vue from '@vitejs/plugin-vue'

import path from 'path'

export default {
    base: './',
    plugins: [vue()],

  // resolve: {
  //   extensions: ['.vue', '.js', '.json', '.mjs', '.d.ts'],
  //   alias: [
  //     { find: "@", replacement: path.resolve(__dirname, './src') },
  //   ],
  // },
    optimizeDeps: {
        include: ['schart.js']
    }
    // server: {
    //     // open: true,//启动项目自动弹出浏览器
    //     // port: 9000,//启动端口
    //     proxy: {
    //       '/api': {
    //         target: process.env.NODE_ENV === 'production' ? 'https://www.zhihu.com/' : 'https://84ae-27-27-88-62.ngrok.io/',	//实际请求地址
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, '')
    //       },
    //     }
    //   }
}