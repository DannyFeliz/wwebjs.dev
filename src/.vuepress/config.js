const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'whatsapp-web.js',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  
  base: '/wwebjs-site/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'pedroslopez/whatsapp-web.js',
    editLinks: false,
    docsDir: 'src/docs',
    docsRepo: "PurpShell/wwebjs-site",
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Documentation',
        link: '/docs/'
      },
      {
        text: 'npm',
        link: 'https://npmjs.com/package/whatsapp-web.js'
      },
      {
        text: 'Releases',
        link: 'https://github.com/pedroslopez/whatsapp-web.js/releases'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'handling-attachments'
          ]
        }
      ],
      '/docs/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: [
            'Constants',
            'BusinessContact',
            'Call',
            'Chat',
            'Client',
            'ClientInfo',
            'Contact',
            'GroupChat',
            'GroupNotification',
            'InterfaceController',
            'Label',
            'Location',
            'Message',
            'MessageMedia',
            'Order',
            'PrivateChat',
            'PrivateContact',
            'Product',
            'Util'
          ]
        }
      ]
    }
  },

  theme: "yuu",

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
