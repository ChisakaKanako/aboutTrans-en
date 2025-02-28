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
  themeConfig: {
    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    search: {
      provider: 'local'
    },
    footer: {
      copyright: '© Created by Kanako.'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resource', link: '/resource' },
      { text: 'Reference', link: '/reference' },
      { text: 'About', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Concept & Definition', link: '/documents/concept-and-definition'
      },
      {
        text: 'Transition & Surgery', link: '/documents/transition-and-surgery'
      },
      {
        text: 'Legal & Social', link: '/documents/legal-and-social'
      },
      {
        text: 'Day & Festival', link: '/documents/day-and-festival'
      },
      {
        text: 'Q & A', link: '/documents/q-and-a'
      }
    ]
  }
})
