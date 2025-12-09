# shadcn Hub

[![Built with Nuxt.js](https://img.shields.io/badge/Built%20with-Nuxt.js-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![License](https://img.shields.io/github/license/lonewolfyx/shadcn-hub)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)

> A curated collection of awesome shadcn resources, components, templates, and tools to accelerate your development
> workflow.

## 🚀 Overview

Shadcn Hub is a comprehensive platform that aggregates and showcases the best shadcn-related projects from the
community. Whether you're looking for UI components, project templates, development tools, or design resources, this hub
serves as your centralized destination for discovering and exploring high-quality shadcn ecosystem projects.

## ✨ Features

- **📚 Curated Collection**: Hand-picked shadcn resources organized into meaningful categories
- **🔍 Easy Discovery**: Intuitive interface with search and categorization for finding exactly what you need
- **📊 Project Insights**: GitHub stars, author information, and project status for each resource
- **🎨 Beautiful UI**: Built with modern design principles using shadcn components
- **⚡ Fast Performance**: Powered by Nuxt.js with optimal loading and navigation
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

## 📂 Categories

### 📚 Libraries & Components

Libraries and component extensions built around the shadcn ecosystem. Includes additional UI components and utilities
that help you create richer interfaces and interactions.

### 🚀 Templates & Starters

Ready-to-use project templates and starter kits powered by shadcn. Designed to speed up initial setup and provide a
solid foundation with best practices.

### 🛠️ Plugins & Tools

A collection of plugins and development tools built for shadcn, offering automation, configuration helpers, theme
management, and workflow enhancements.

### 🎨 Design & Style Resources

Design-focused resources such as color palettes, typography presets, design tokens, and Figma kits. Helps you maintain a
consistent and polished visual identity.

### 🎯 IconFont

Icon resources compatible with shadcn, including IconFont sets, SVG icons, and React-based icon libraries to enrich your
project's visual language.

### 🧩 Shadcn Blocks

Reusable UI blocks and page sections built with shadcn—such as hero sections, dashboards, forms, and more—to help you
quickly assemble real-world layouts.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/lonewolfyx/shadcn-hub.git
cd shadcn-hub
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the application
pnpm build

# Preview the production build
pnpm preview
```

## 📁 Project Structure

```
shadcn-hub/
├── app/                    # Main application directory
│   ├── components/        # Vue components
│   │   ├── ui/           # shadcn components
│   │   └── ...           # Custom components
│   ├── constant/         # Constants and data
│   ├── pages/            # Page components
│   └── assets/           # Static assets
├── plugins/              # Nuxt plugins
├── public/               # Public assets
│   ├── shadcn-hub.json   # Registry data
│   └── schema.json       # Data schema
├── scripts/              # Build scripts
└── ...                   # Configuration files
```

## 📊 Data Structure

The project uses a structured JSON format to maintain the registry of shadcn resources. Each entry includes:

- **Basic Info**: Name, slug, description
- **Categories**: Organized into predefined categories
- **Links**: Homepage and repository URLs
- **Author**: Author information and GitHub profile
- **GitHub**: Star count and project metrics
- **Status**: Active or deprecated
- **Timestamps**: Addition and update dates

## 🤝 Contributing

We welcome contributions to the shadcn Hub! Here's how you can help:

### Adding New Resources

1. Fork the repository
2. Add your resource to `public/shadcn-hub.json` following the schema in `public/schema.json`
3. Ensure your entry includes all required fields
4. Test your changes locally
5. Submit a pull request

### Guidelines

- **Quality**: Only include high-quality, actively maintained projects
- **Relevance**: Resources should be directly related to shadcn
- **Documentation**: Include clear descriptions and accurate links
- **Categories**: Place resources in appropriate categories
- **Verification**: Ensure all links work and information is up-to-date

## 📝 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build
- `pnpm typecheck` - Run type checking
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix linting issues

### Code Quality

The project uses ESLint with pre-commit hooks to maintain code quality:

- **Simple Git Hooks**: Automates pre-commit checks
- **Lint Staged**: Runs linter on staged files
- **Commit Verification**: Ensures commit messages follow conventions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[shadcn](https://ui.shadcn.com/)** - For the amazing component library
- **[Nuxt.js](https://nuxt.com/)** - For the powerful Vue framework
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **Community Contributors** - For building and maintaining the amazing shadcn ecosystem
