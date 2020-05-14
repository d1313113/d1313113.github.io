const path = require('path');
// const resolve = p => path.resolve(__dirname, './', p);

module.exports = {
  title: 'Cumelmell blog',
  description: 'Welcome to my blog',
  repo: 'https://github.com/d1313113/d1313113.github.io',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/tp/soma/dir',
        // '@img': resolve('public/images')
        '@img': path.resolve(__dirname, './public/images')
      }
    }
  },
  plugins: [
    'vuepress-plugin-cat'
  ],
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: 'meteorlxy',
  themeConfig: {
    lang: 'zh-CN',
    lastUpdated: 'last updated',
    personalInfo: {
      nickname: 'Cumelmell',
      description: 'Just Enjoy Coding',
      email: 'cumelmell@foxmail.com',
      location: 'China',
      avatar: '/images/common/avatar.jpg'
    },
    sns: {
      github: {
        account: 'd1313113',
        link: 'https://github.com/d1313113'
      }
    },
    header: {
    },
    footer: {
      poweredBy: false,
      poweredByTheme: false,
      custom: 'Copyright 2019-present <a href="https://github.com/d1313113" target="_blank">Cumelmell</a> | MIT License'
    },
    comments: false,
    // comments: {
    //   owner: 'Cumelmell',
    //   repo: 'd1313113',
    //   repo: 'd1313113.github.io',
    //   clientId: 'MY_CLIENT_ID',
    //   clientSecret: 'MY_CLIENT_SECRET',
    //   autoCreateIssue: process.env.NODE_ENV !== 'development'
    // },
    pagination: {
      perPage: 5,
    },
    lang: {
      home: '欢迎来到我的blog',
      posts: '文章',
      category: '分类',
      categories: '分类',
      allCategories: '全部',
      tag: '标签',
      tags: '标签',
      createdAt: '发布时间',
      updatedAt: '最后修改',
      prevPost: '上一篇',
      nextPost: '下一篇',
    },
    nav: [
      {
        text: '首页',
        link: '/',
        exact: true
      },
      {
        text: '文章',
        link: '/posts/',
        exact: false
      },
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
    smoothScroll: true
  }
};