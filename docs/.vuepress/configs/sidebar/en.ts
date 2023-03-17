import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/algorithm': [
    {
      text: '算法',
      children: [
        "/algorithm/README.md",
        "/algorithm/sort.md",
        "/algorithm/thing.md",
      ]
    },
    {
      text: '使用 golang 进行机器学习',
      children: [
        "/algorithm/machine-learning-with-go/README.md",
        "/algorithm/machine-learning-with-go/table-of-contents.md",
        "/algorithm/machine-learning-with-go/chapter-02/README.md",
        "/algorithm/machine-learning-with-go/chapter-02/vectors.md",
        "/algorithm/machine-learning-with-go/chapter-02/matrices-and-vectors.md",
      ]
    }
  ],
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
  '/fine-tune': [
    {
      text: 'Tools',
      children: [
        "/fine-tune/README.md",
      ]
    },
    {
      text: 'Fine-Tune 实践',
      children: [
      ]
    }
  ]
}
