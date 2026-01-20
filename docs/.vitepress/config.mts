import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dev Hytale",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' }
    ],

    sidebar: {
      '/getting-started/': [
        { text: 'Getting Started', link: '/getting-started/' },
        {
          text: 'Commands',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/getting-started/commands' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/timothywashburn/devhytale.com' }
    ],

    search: {
      provider: 'local'
    }
  }
})
