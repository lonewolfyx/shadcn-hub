import type { ICategories } from '~/types/categories'

export const categories: ICategories[] = [
    {
        name: 'Libraries & Components',
        url: 'libraries-components',
        description: 'Libraries and component extensions built around the shadcn/ui ecosystem. Includes additional UI components and utilities that help you create richer interfaces and interactions.',
        icon: 'hugeicons:libraries',
    },
    {
        name: 'Templates & Starters',
        url: 'templates-starters',
        description: 'Ready-to-use project templates and starter kits powered by shadcn/ui. Designed to speed up initial setup and provide a solid foundation with best practices.',
        icon: 'qlementine-icons:template-16',
    },
    {
        name: 'Plugins & Tools',
        url: 'plugins-tools',
        description: 'A collection of plugins and development tools built for shadcn/ui, offering automation, configuration helpers, theme management, and workflow enhancements.',
        icon: 'mingcute:plugin-2-fill',
    },
    {
        name: 'Design & Style Resources',
        url: 'design-style-resources',
        description: 'Design-focused resources such as color palettes, typography presets, design tokens, and Figma kits. Helps you maintain a consistent and polished visual identity.',
        icon: 'fluent:design-ideas-24-regular',
    },
    {
        name: 'IconFont',
        url: 'iconfont',
        description: 'Icon resources compatible with shadcn/ui, including IconFont sets, SVG icons, and React-based icon libraries to enrich your project’s visual language.',
        icon: 'solar:command-outline',
    },
    {
        name: 'Shadcn Blocks',
        url: 'shadcn-blocks',
        description: 'Reusable UI blocks and page sections built with shadcn/ui—such as hero sections, dashboards, forms, and more—to help you quickly assemble real-world layouts.',
        icon: 'clarity:block-solid-badged',
    },
]
