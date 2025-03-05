import DefaultTheme from 'vitepress/theme'
import Layout from './layout.vue'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
export default {
  extends: DefaultTheme,
  Layout: Layout
}