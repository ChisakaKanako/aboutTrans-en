import { defineConfig } from 'vitepress'
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    }
  },
  title: "aboutTrans",
  description: "aboutTrans is a popular science website for people who don't understand or want to understand the transgender community.",
  head: [
    ['link', { rel: 'icon', href: '/icon.png'}]
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/icon.png',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/ChisakaKanako/aboutTrans-en/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },
    search: {
      provider: 'local'
    },
    footer: {
      copyright: '© Created by Kanako.'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],
    sidebar: [
      {
        text: "Menu",
        items: [
          { text: 'Concept & Definition', link: '/documents/concept-and-definition' },
          { text: 'Transition & Surgery', link: '/documents/transition-and-surgery' },
          { text: 'Legal & Social', link: '/documents/legal-and-social' },
          { text: 'Day & Festival', link: '/documents/day-and-festival' },
          { text: 'Q & A', link: '/documents/q-and-a' },
          { text: 'About', link: '/about' }
        ]
      }
    ]
  }
})