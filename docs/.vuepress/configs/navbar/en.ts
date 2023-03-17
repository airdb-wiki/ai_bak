import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: 'https://airdb.wiki',
  },
  { text: 'Algorithm', link: '/algorithm/' },
  { text: 'Fine-Tune', link: '/fine-tune/', },
  { text: 'AIGC', link: '/aigc/', },
]
