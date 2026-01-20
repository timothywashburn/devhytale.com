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
        { text: 'Hi', link: '/getting-started/' },
        // {
        //   text: 'Commands',
        //   collapsed: false,
        //   items: [
        //     { text: 'Markdown Examples', link: '/getting-started/markdown-examples' },
        //   ]
        // }
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
