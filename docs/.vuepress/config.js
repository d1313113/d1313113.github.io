module.exports = {
  title: 'Hello githubPage',
  description: 'jjjj',
  repo: 'https://github.com/d1313113/d1313113.github.io',
  // dest: './dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/tp/soma/dir'
      }
    }
  },
  plugins: [
    'vuepress-plugin-cat'
  ],
  themeConfig: {
    nav: [
      {
        text: 'github',
        link: 'https://github.com/d1313113/d1313113.github.io'
      }
    ],
    serviceWorker: {
      updatePopup: {
        message: '内容有更新',
        buttonText: '刷新'
      }
    },
    sidebar: [
      {
        title: 'algorithm',
        collapsable: true,
        children: [
          ['/algorithm/', '算法']
        ]
      },
      {
        title: 'Redis',
        collapsable: true,
        children: [
          ['/redis/', 'Redis']
        ]
      }
    ]
  }
};