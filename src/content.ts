export type Locale = "zh" | "en";

export interface SiteContent {
  htmlLang: string;
  pageTitle: string;
  nav: {
    features: string;
    download: string;
    faq: string;
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
    note: string;
  };
  highlights: Array<{ icon: string; label: string; value: string }>;
  screenshotSection: {
    slides: Array<{
      title: string;
      caption: string;
      tags: string[];
      points: string[];
    }>;
  };
  downloadSection: {
    badge: string;
    title: string;
    subtitle: string;
    versionLabel: string;
    versionValue: string;
    cards: Array<{
      platform: string;
      desc: string;
      action: string;
    }>;
    extras: Array<{
      title: string;
      desc: string;
      action: string;
    }>;
  };
  featureSection: {
    badge: string;
    title: string;
    cards: Array<{ icon: string; title: string; desc: string }>;
  };
  techSection: {
    badge: string;
    title: string;
    subtitle: string;
    stacks: string[];
    advantages: Array<{ title: string; desc: string }>;
  };
  faqSection: {
    badge: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: {
    copyright: string;
    project: string;
    home: string;
    nav: string;
  };
}

export const content: Record<Locale, SiteContent> = {
  zh: {
    htmlLang: "zh-CN",
    pageTitle: "Envra 官网 | 下载与安装",
    nav: {
      features: "产品能力",
      download: "下载",
      faq: "常见问题",
      github: "GitHub",
    },
    switchers: {
      lang: "切换语言",
      theme: "切换主题",
    },
    hero: {
      badge: "Envra · 桌面开发环境管理工具",
      title: "下载安装后即可使用的开发环境助手。",
      subtitle:
        "Envra 面向实际开发场景，提供环境诊断、工具管理、项目初始化和偏好设置，让新机器和新成员更快进入可工作状态。",
      primary: "立即下载",
      secondary: "查看 GitHub",
      note: "支持 macOS / Linux / Windows，当前版本 v0.1.5",
    },
    highlights: [
      { icon: "rocket", label: "开箱页面", value: "5 大模块" },
      { icon: "pulse", label: "环境检查", value: "8 项核心诊断" },
      { icon: "languages", label: "界面体验", value: "中英双语 + 主题切换" },
      { icon: "users", label: "定位", value: "面向下载安装用户" },
    ],
    screenshotSection: {
      slides: [
        {
          title: "Dashboard",
          caption: "查看健康分、待处理问题与快捷入口。",
          tags: ["Health Score", "Quick Actions", "System Info"],
          points: [
            "集中展示环境风险与优先级",
            "一键跳转诊断和工具管理",
            "帮助团队统一排障入口",
          ],
        },
        {
          title: "Environment Doctor",
          caption: "诊断并修复本地开发环境常见问题。",
          tags: ["Scan", "Fix", "Runtime Checks"],
          points: [
            "分类查看 runtime / package / git 等状态",
            "支持 pnpm 与 yarn 缺失修复",
            "支持补全 Git 用户配置",
          ],
        },
        {
          title: "Tool Manager",
          caption: "按状态管理工具安装与更新。",
          tags: ["Installed", "Available", "Update"],
          points: [
            "区分已安装与可安装工具",
            "展示当前版本与可更新状态",
            "统一执行安装与更新动作",
          ],
        },
        {
          title: "Project Init",
          caption: "新项目创建流程标准化。",
          tags: ["Templates", "Node Version", "Git Init"],
          points: [
            "提供常用模板快速选择",
            "可选包管理器与 Node 版本",
            "创建后返回项目路径结果",
          ],
        },
      ],
    },
    downloadSection: {
      badge: "下载与安装",
      title: "按你的系统直接下载安装",
      subtitle: "推荐从 GitHub Releases 获取最新稳定构建。",
      versionLabel: "最新版本",
      versionValue: "v0.1.5",
      cards: [
        {
          platform: "macOS",
          desc: "适合 Apple Silicon / Intel 设备，推荐下载 dmg 包安装。",
          action: "下载 macOS 版本",
        },
        {
          platform: "Windows",
          desc: "提供 Windows 安装包，适合团队统一分发与本地安装。",
          action: "下载 Windows 版本",
        },
        {
          platform: "Linux",
          desc: "提供 Linux 发行包，适合开发机与服务器桌面环境。",
          action: "下载 Linux 版本",
        },
      ],
      extras: [
        {
          title: "版本日志",
          desc: "查看每个版本的更新内容与修复说明。",
          action: "打开 Releases",
        },
        {
          title: "中文文档",
          desc: "查看项目说明、注意事项与安装建议。",
          action: "查看 README",
        },
      ],
    },
    featureSection: {
      badge: "产品能力",
      title: "安装后就能直接提升效率的核心功能",
      cards: [
        {
          icon: "gauge",
          title: "环境健康概览",
          desc: "仪表盘快速看到机器状态、问题数量与关键入口。",
        },
        {
          icon: "shield",
          title: "Environment Doctor",
          desc: "扫描 Node/npm/pnpm/yarn/Git/SSH/Git 配置并支持可修复项。",
        },
        {
          icon: "tool",
          title: "工具管理",
          desc: "已安装与可安装工具分区展示，统一安装/更新/卸载。",
        },
        {
          icon: "sparkles",
          title: "项目初始化",
          desc: "快速创建 React TS、Vue TS、Next.js、Node TS 项目。",
        },
        {
          icon: "settings",
          title: "偏好设置持久化",
          desc: "主题、语言、镜像源、安装路径、代理等设置持久保存。",
        },
        {
          icon: "desktop",
          title: "跨平台桌面应用",
          desc: "Tauri 架构带来更轻量的资源占用和更快的启动体验。",
        },
      ],
    },
    techSection: {
      badge: "基础技术",
      title: "工程基础清晰，性能体验更友好",
      subtitle: "技术选型服务于安装用户体验，而不是展示复杂源码流程。",
      stacks: ["Tauri 2", "React 19", "Vite 7", "TypeScript", "Zustand"],
      advantages: [
        {
          title: "更轻量的桌面运行时",
          desc: "基于系统 WebView 的 Tauri 架构，通常能减少安装体积与内存压力。",
        },
        {
          title: "启动与交互响应更快",
          desc: "Vite + React 组合让前端渲染与页面切换保持流畅，减少等待感。",
        },
        {
          title: "跨平台发布路径统一",
          desc: "同一套产品逻辑可构建 macOS/Linux/Windows 版本，降低维护分叉成本。",
        },
        {
          title: "可持续迭代",
          desc: "TypeScript 与模块化结构提升可维护性，后续扩展成本更低。",
        },
      ],
    },
    faqSection: {
      badge: "FAQ",
      title: "常见问题",
      items: [
        {
          q: "必须从源码运行吗？",
          a: "不需要。官网定位是下载安装直接使用，推荐从 Releases 下载对应系统安装包。",
        },
        {
          q: "是否支持中英文和主题切换？",
          a: "支持。应用内与官网都提供中英文切换及明暗主题切换。",
        },
        {
          q: "如何获取更新？",
          a: "关注 GitHub Releases 页面，下载最新版本并查看更新日志。",
        },
        {
          q: "支持哪些系统？",
          a: "当前提供 macOS、Windows、Linux 三个平台安装包。",
        },
        {
          q: "适合团队使用吗？",
          a: "适合。它能统一新成员环境搭建入口，降低环境差异带来的沟通成本。",
        },
        {
          q: "现在是不是最终版本？",
          a: "目前仍在持续迭代中，部分页面数据仍含演示内容，但主要流程已可用。",
        },
      ],
    },
    cta: {
      title: "准备开始使用 Envra？",
      subtitle: "下载最新版本，5 分钟内完成安装并开始你的环境诊断流程。",
      primary: "下载最新版本",
      secondary: "查看 GitHub 项目",
    },
    footer: {
      copyright: "Copyright © 2026 lengziyu.cn. All rights reserved.",
      project: "项目 GitHub",
      home: "lengziyu.cn",
      nav: "nav.lengziyu.cn",
    },
  },
  en: {
    htmlLang: "en",
    pageTitle: "Envra Official Site | Download & Install",
    nav: {
      features: "Features",
      download: "Download",
      faq: "FAQ",
      github: "GitHub",
    },
    switchers: {
      lang: "Switch language",
      theme: "Switch theme",
    },
    hero: {
      badge: "Envra · Desktop Dev Environment Assistant",
      title: "Download once and start managing your dev environment immediately.",
      subtitle:
        "Envra focuses on practical local setup workflows: diagnostics, tool management, project scaffolding, and persistent preferences for daily development.",
      primary: "Download Now",
      secondary: "View GitHub",
      note: "Available on macOS / Linux / Windows, current version v0.1.5",
    },
    highlights: [
      { icon: "rocket", label: "Built-in Areas", value: "5 modules" },
      { icon: "pulse", label: "Health Checks", value: "8 core checks" },
      { icon: "languages", label: "UX", value: "Bilingual + Theme Switch" },
      { icon: "users", label: "Positioning", value: "Built for end users" },
    ],
    screenshotSection: {
      slides: [
        {
          title: "Dashboard",
          caption: "Track environment health and jump to the next action fast.",
          tags: ["Health Score", "Quick Actions", "System Info"],
          points: [
            "Aggregates key risks in one view",
            "Direct links to Doctor and Tool Manager",
            "Useful as a team troubleshooting start point",
          ],
        },
        {
          title: "Environment Doctor",
          caption: "Diagnose and resolve common local setup issues.",
          tags: ["Scan", "Fix", "Runtime Checks"],
          points: [
            "Grouped runtime/package/git checks",
            "Auto-fix for missing pnpm/yarn",
            "Prompts for Git identity setup",
          ],
        },
        {
          title: "Tool Manager",
          caption: "Handle installations and updates by status.",
          tags: ["Installed", "Available", "Update"],
          points: [
            "Split view for installed vs available tools",
            "Version and update state visibility",
            "Unified install/update workflow",
          ],
        },
        {
          title: "Project Init",
          caption: "Standardize new project creation steps.",
          tags: ["Templates", "Node Version", "Git Init"],
          points: [
            "Quick pick common templates",
            "Choose package manager and Node version",
            "Returns created project path clearly",
          ],
        },
      ],
    },
    downloadSection: {
      badge: "Download",
      title: "Get the right package for your platform",
      subtitle: "We recommend downloading from GitHub Releases for the latest stable build.",
      versionLabel: "Latest Version",
      versionValue: "v0.1.5",
      cards: [
        {
          platform: "macOS",
          desc: "For Apple Silicon and Intel devices, with desktop installer package.",
          action: "Download for macOS",
        },
        {
          platform: "Windows",
          desc: "Windows installer package for easy local or team deployment.",
          action: "Download for Windows",
        },
        {
          platform: "Linux",
          desc: "Linux distribution package suitable for developer workstations.",
          action: "Download for Linux",
        },
      ],
      extras: [
        {
          title: "Release Notes",
          desc: "Track version updates, fixes, and behavior changes.",
          action: "Open Releases",
        },
        {
          title: "Documentation",
          desc: "Read setup notes and usage guidance before installation.",
          action: "Read README",
        },
      ],
    },
    featureSection: {
      badge: "Features",
      title: "Core capabilities that improve workflow after install",
      cards: [
        {
          icon: "gauge",
          title: "Environment Overview",
          desc: "A clear dashboard for machine status, issue count, and quick actions.",
        },
        {
          icon: "shield",
          title: "Environment Doctor",
          desc: "Scans Node/npm/pnpm/yarn/Git/SSH/Git config with one-click fixes where available.",
        },
        {
          icon: "tool",
          title: "Tool Manager",
          desc: "Installed/available tool split with unified install/update/uninstall actions.",
        },
        {
          icon: "sparkles",
          title: "Project Init",
          desc: "Scaffold React TS, Vue TS, Next.js, and Node TS projects quickly.",
        },
        {
          icon: "settings",
          title: "Persistent Preferences",
          desc: "Theme, language, registry mirror, install path, and proxy are saved.",
        },
        {
          icon: "desktop",
          title: "Cross-platform Desktop",
          desc: "Tauri architecture brings lightweight runtime and fast startup behavior.",
        },
      ],
    },
    techSection: {
      badge: "Technology",
      title: "Solid foundations with user-facing performance benefits",
      subtitle: "The stack is chosen to improve install and runtime experience.",
      stacks: ["Tauri 2", "React 19", "Vite 7", "TypeScript", "Zustand"],
      advantages: [
        {
          title: "Lighter desktop runtime",
          desc: "Tauri's system WebView approach often reduces package size and memory overhead.",
        },
        {
          title: "Fast startup and interaction",
          desc: "React + Vite keeps UI rendering and page transitions responsive.",
        },
        {
          title: "Unified multi-platform delivery",
          desc: "One product logic can target macOS, Linux, and Windows with less maintenance split.",
        },
        {
          title: "Maintainable evolution path",
          desc: "TypeScript and modular structure make future feature expansion safer and faster.",
        },
      ],
    },
    faqSection: {
      badge: "FAQ",
      title: "Common questions",
      items: [
        {
          q: "Do I need to run the source code?",
          a: "No. This site focuses on end-user download and installation through release packages.",
        },
        {
          q: "Are language and theme switches supported?",
          a: "Yes. Envra supports bilingual UI and light/dark theme switching.",
        },
        {
          q: "Where do I get updates?",
          a: "Follow GitHub Releases to download newer versions and read changelog notes.",
        },
        {
          q: "Which systems are supported?",
          a: "Currently macOS, Windows, and Linux installation packages are provided.",
        },
        {
          q: "Can teams use Envra?",
          a: "Yes. It helps standardize onboarding and reduce environment mismatch overhead.",
        },
        {
          q: "Is this the final version?",
          a: "Envra is still evolving; some pages still contain demo data while core flows are available.",
        },
      ],
    },
    cta: {
      title: "Ready to try Envra?",
      subtitle: "Install the latest release and run your first environment diagnostic in minutes.",
      primary: "Download Latest",
      secondary: "Open GitHub Repository",
    },
    footer: {
      copyright: "Copyright © 2026 lengziyu.cn. All rights reserved.",
      project: "Project GitHub",
      home: "lengziyu.cn",
      nav: "nav.lengziyu.cn",
    },
  },
};
