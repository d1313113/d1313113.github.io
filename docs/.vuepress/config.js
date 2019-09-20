module.exports = {
  title: 'Cumelmell',
  description: 'Cumelmell gitpage',
  repo: 'https://github.com/d1313113/d1313113.github.io',
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
        title: 'Algorithm',
        collapsable: true,
        children: [
          ['/algorithm/', '算法']
        ]
      },
      {
        title: 'DataBase',
        collapsable: true,
        children: [
          ['/database/mongodb', 'MongoDB']
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