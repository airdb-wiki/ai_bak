import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/aigc/': [
    {
      text: 'Tools',
      children: [
        '/aigc/README.md',
        '/aigc/products.md',
        '/aigc/images.md',
        '/aigc/videos.md',
      ],
    },
  ],
}
