export type Locale = "zh" | "en";

export interface SiteContent {
  htmlLang: string;
  pageTitle: string;
  nav: {
    features: string;
    modules: string;
    stack: string;
    start: string;
    github: string;
  };
  switchers: {
    lang: string;
    theme: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  highlights: Array<{ label: string; value: string }>;
  featureSection: {
    badge: string;
    title: string;
    cards: Array<{ title: string; desc: string }>;
  };
  moduleSection: {
    badge: string;
    title: string;
    modules: Array<{ name: string; desc: string; points: string[] }>;
  };
  detailSection: {
    badge: string;
    title: string;
    doctorTitle: string;
    doctorItems: string[];
    toolTitle: string;
    toolItems: string[];
    initTitle: string;
    initItems: string[];
  };
  stackSection: {
    badge: string;
    title: string;
    subtitle: string;
    stacks: string[];
    commandsTitle: string;
    devTitle: string;
    buildTitle: string;
    releaseTitle: string;
    devCommand: string;
    buildCommand: string;
    releaseCommand: string;
    statusTitle: string;
    statusBody: string;
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: string;
}

export const content: Record<Locale, SiteContent> = {
  zh: {
    htmlLang: "zh-CN",
    pageTitle: "Envra 官网 | 开发环境管理桌面应用",
    nav: {
      features: "核心能力",
      modules: "模块详情",
      stack: "技术栈",
      start: "快速开始",
      github: "GitHub",
    },
    switchers: {
      lang: "切换语言",
      theme: "切换主题",
    },
    hero: {
      badge: "Envra · Developer Environment Manager",
      title: "把开发环境诊断、修复与初始化，集中到一个桌面应用。",
      subtitle:
        "Envra 基于 Tauri + React 构建，覆盖环境健康检查、工具管理、项目初始化与个性化设置，帮助开发者更快搭建稳定的本地开发环境。",
      primary: "查看 GitHub 项目",
      secondary: "了解功能细节",
    },
    highlights: [
      { label: "核心页面", value: "5" },
      { label: "环境检查项", value: "8" },
      { label: "语言与主题", value: "双语 + 明暗" },
      { label: "发布目标", value: "macOS / Linux / Windows" },
    ],
    featureSection: {
      badge: "真实能力",
      title: "官网内容已与 Envra 当前代码实现对齐",
      cards: [
        {
          title: "环境健康仪表盘",
          desc: "汇总系统信息、健康分、分类通过率与待处理问题，并提供直达操作入口。",
        },
        {
          title: "Environment Doctor",
          desc: "扫描 Node、npm、pnpm、yarn、Git、SSH、Git 配置，支持针对可修复项一键处理。",
        },
        {
          title: "工具管理",
          desc: "展示已安装与可安装工具，支持通过 npm 执行 pnpm/yarn 安装、更新与卸载。",
        },
        {
          title: "项目初始化",
          desc: "支持 React TS、Vue TS、Next.js、Node TS 模板，选择 Node 版本、包管理器并可选初始化 Git。",
        },
        {
          title: "设置中心",
          desc: "可配置主题、语言、镜像源、安装路径、代理，并通过 Zustand 持久化设置。",
        },
        {
          title: "跨平台桌面端",
          desc: "基于 Tauri 2，具备本地命令调用能力，可构建多平台安装包。",
        },
      ],
    },
    moduleSection: {
      badge: "模块拆解",
      title: "围绕真实开发流程设计的 4 个关键工作区",
      modules: [
        {
          name: "1. Dashboard 仪表盘",
          desc: "先看全局，再进入操作。",
          points: [
            "聚合环境健康分与异常项",
            "显示系统版本、架构与关键状态",
            "一键跳转诊断、工具管理、项目初始化、设置",
          ],
        },
        {
          name: "2. Environment Doctor",
          desc: "快速发现并修复环境问题。",
          points: [
            "分类展示 runtime/packageManager/versionControl/authentication/gitConfig",
            "对 pnpm、yarn 缺失项执行自动修复",
            "支持补全 Git user.name / user.email",
          ],
        },
        {
          name: "3. Tool Manager + Project Init",
          desc: "工具与脚手架在一个流程里完成。",
          points: [
            "安装页区分 Installed / Available",
            "脚手架支持模板、Node 版本、包管理器与 Git 初始化",
            "创建结果返回项目绝对路径",
          ],
        },
        {
          name: "4. Settings",
          desc: "把常用偏好固定下来。",
          points: [
            "主题切换（light / dark）",
            "语言切换（zh / en）",
            "镜像源、安装路径、代理参数统一管理",
          ],
        },
      ],
    },
    detailSection: {
      badge: "能力细节",
      title: "可执行动作与检查项一目了然",
      doctorTitle: "Environment Doctor 检查项",
      doctorItems: [
        "Node.js / npm / pnpm / yarn 版本与可用性",
        "Git 是否安装",
        "SSH 密钥是否存在（~/.ssh/id_ed25519 或 id_rsa）",
        "Git user.name 与 user.email 全局配置",
      ],
      toolTitle: "Tool Manager 动作",
      toolItems: [
        "pnpm: install / update / uninstall",
        "yarn: install / update / uninstall",
        "npm: update",
        "Node.js 与 Git 当前为只读展示（非一键托管）",
      ],
      initTitle: "Project Init 支持",
      initItems: [
        "模板: react-ts / vue-ts / next / node-ts",
        "包管理器: npm / pnpm / yarn",
        "可选初始化 Git 仓库",
        "默认项目目录: ~/Projects（可在设置中修改）",
      ],
    },
    stackSection: {
      badge: "技术与发布",
      title: "桌面端工程化栈与交付流程",
      subtitle: "与 Envra 主仓库一致",
      stacks: [
        "Tauri 2",
        "React 19",
        "Vite 7",
        "Tailwind CSS v4",
        "shadcn/ui",
        "TypeScript",
        "Zustand",
      ],
      commandsTitle: "常用命令",
      devTitle: "本地开发",
      buildTitle: "本地打包",
      releaseTitle: "发布示例",
      devCommand: "npm install\nnpm run tauri dev",
      buildCommand: "npm run tauri build",
      releaseCommand: "git tag v0.1.5\ngit push origin v0.1.5",
      statusTitle: "当前状态",
      statusBody: "Envra 目前处于前端原型阶段，部分页面数据仍为演示数据（mock）。",
    },
    cta: {
      title: "开始使用 Envra",
      subtitle: "在本地快速搭建更稳定的开发环境与初始化流程。",
      primary: "打开 GitHub 仓库",
      secondary: "查看中文文档",
    },
    footer: "© 2026 Envra. Build Better Dev Environments.",
  },
  en: {
    htmlLang: "en",
    pageTitle: "Envra Official Site | Developer Environment Manager",
    nav: {
      features: "Capabilities",
      modules: "Modules",
      stack: "Tech Stack",
      start: "Quick Start",
      github: "GitHub",
    },
    switchers: {
      lang: "Switch language",
      theme: "Switch theme",
    },
    hero: {
      badge: "Envra · Developer Environment Manager",
      title: "Diagnose, fix, and bootstrap your dev environment in one desktop app.",
      subtitle:
        "Built with Tauri + React, Envra combines environment health checks, tool management, project scaffolding, and persistent developer preferences.",
      primary: "View on GitHub",
      secondary: "Explore Features",
    },
    highlights: [
      { label: "Core Pages", value: "5" },
      { label: "Diagnostic Checks", value: "8" },
      { label: "Language & Theme", value: "Bilingual + Light/Dark" },
      { label: "Release Targets", value: "macOS / Linux / Windows" },
    ],
    featureSection: {
      badge: "Implemented Features",
      title: "The site now matches Envra's actual code-level capabilities",
      cards: [
        {
          title: "Environment Dashboard",
          desc: "Aggregates health score, system info, category pass rates, and actionable issues.",
        },
        {
          title: "Environment Doctor",
          desc: "Scans Node, npm, pnpm, yarn, Git, SSH, and Git config; supports one-click fixes where possible.",
        },
        {
          title: "Tool Manager",
          desc: "Lists installed and available tools with npm-driven install/update/uninstall actions.",
        },
        {
          title: "Project Init",
          desc: "Supports React TS, Vue TS, Next.js, and Node TS templates with Node/PM options.",
        },
        {
          title: "Settings Center",
          desc: "Theme, language, registry mirror, install path, and proxy with persisted state via Zustand.",
        },
        {
          title: "Cross-platform Desktop",
          desc: "Powered by Tauri 2 with native command execution and multi-platform packaging.",
        },
      ],
    },
    moduleSection: {
      badge: "Workflow",
      title: "Four work areas aligned with real developer setup flows",
      modules: [
        {
          name: "1. Dashboard",
          desc: "See global status first, then drill into actions.",
          points: [
            "Health score and issue aggregation",
            "OS/version/arch and critical status indicators",
            "Fast entry to doctor, tools, init, and settings",
          ],
        },
        {
          name: "2. Environment Doctor",
          desc: "Find and resolve setup problems quickly.",
          points: [
            "Grouped checks for runtime/package/auth/git config",
            "Auto-fix for missing pnpm/yarn",
            "Prompts for Git user.name and user.email",
          ],
        },
        {
          name: "3. Tool Manager + Project Init",
          desc: "Manage dependencies and scaffold projects in one flow.",
          points: [
            "Installed/Available tool split",
            "Template + Node + package manager + optional git init",
            "Returns the created project's absolute path",
          ],
        },
        {
          name: "4. Settings",
          desc: "Keep team or personal defaults consistent.",
          points: [
            "Theme switching (light/dark)",
            "Language switching (zh/en)",
            "Registry mirror, install path, and proxy management",
          ],
        },
      ],
    },
    detailSection: {
      badge: "Action Matrix",
      title: "Concrete checks and executable actions",
      doctorTitle: "Environment Doctor Checks",
      doctorItems: [
        "Node.js / npm / pnpm / yarn version & availability",
        "Git installation status",
        "SSH key presence (~/.ssh/id_ed25519 or id_rsa)",
        "Global Git user.name and user.email",
      ],
      toolTitle: "Tool Manager Actions",
      toolItems: [
        "pnpm: install / update / uninstall",
        "yarn: install / update / uninstall",
        "npm: update",
        "Node.js and Git are currently read-only display items",
      ],
      initTitle: "Project Init Support",
      initItems: [
        "Templates: react-ts / vue-ts / next / node-ts",
        "Package managers: npm / pnpm / yarn",
        "Optional Git repository initialization",
        "Default project base: ~/Projects (configurable)",
      ],
    },
    stackSection: {
      badge: "Engineering",
      title: "Desktop-focused stack and release workflow",
      subtitle: "Aligned with the main Envra repository",
      stacks: [
        "Tauri 2",
        "React 19",
        "Vite 7",
        "Tailwind CSS v4",
        "shadcn/ui",
        "TypeScript",
        "Zustand",
      ],
      commandsTitle: "Common Commands",
      devTitle: "Local Development",
      buildTitle: "Local Build",
      releaseTitle: "Release Example",
      devCommand: "npm install\nnpm run tauri dev",
      buildCommand: "npm run tauri build",
      releaseCommand: "git tag v0.1.5\ngit push origin v0.1.5",
      statusTitle: "Current Status",
      statusBody: "Envra is currently frontend-first, and some page data is still mock/demo data.",
    },
    cta: {
      title: "Start with Envra",
      subtitle: "Build a faster and more reliable local development setup.",
      primary: "Open GitHub Repository",
      secondary: "Read Chinese Docs",
    },
    footer: "© 2026 Envra. Build Better Dev Environments.",
  },
};
