# @sobird/murph

[![npm][npm]][npm-url]
![TypeScript][typescript]
![Node.js][node]
![CLI][cli]
[![Build Status][build-status]][build-status-url]
[![License][license]][license-url]
[![Install Size][size]][size-url]

> 一个优雅的 TypeScript 项目模板，助您快速启动新项目。

- 完整的 CI/CD 流水线（GitHub Actions）
- 自动化版本管理和发布（Release Please）
- 代码质量保障（ESLint, Prettier, Husky）
- TypeScript 严格模式配置
- pnpm workspace 结构
- npm 包发布配置和 OIDC 认证
- 测试框架集成（Vitest）
- 构建工具配置（tsup）
- Git 提交规范（Commitlint）
- 项目模板清理脚本（degit.json）

## 🚀 启动您的项目

不只是克隆，而是**孕育**。使用 `degit` 启动新项目是最快的方式，确保零 git 历史污染。

```bash
# 在当前目录孕育新项目
npx degit sobird/murph .

# 或在特定文件夹孕育
npx degit sobird/murph my-new-project

# 重置名称和版本
cd my-new-project

# 初始化项目
pnpm install
```

### 🛰️ 工程治理

`murph` 遵循最高标准的自动化软件交付规范。每一次更改都被追踪，每一次发布都可预测。

- **[约定式提交](https://www.conventionalcommits.org/)**: 每个提交都遵循严格的语义化结构，确保清晰性和机器可读性。
- **[Release Please](https://github.com/googleapis/release-please)**: 自动版本管理和变更日志生成，无需手动 `npm version`。
- **[构建溯源](https://docs.npmjs.com/generating-provenance-statements)**: 每个 NPM 发布包都包含构建溯源声明，直接关联 GitHub 源码。

### 🤖 CI/CD 流水线

通过自动化生命周期维护项目纯净度：

1. **提交**: 开发者推送 `feat:`、`fix:` 或 `docs:` 类型的提交。
2. **审查**: `release-please` 自动维护发布 PR。
3. **发布**: 合并发布 PR 后，包将被构建、测试并发布到 NPM，采用 OIDC 身份验证握手。

## 📋 开发规范

### 代码风格

- 使用 ESLint 进行代码检查
- Prettier 代码格式化（已禁用，由 ESLint 统一处理）
- Git Hooks 确保提交质量

### 提交信息

遵循 [约定式提交](https://www.conventionalcommits.org/) 规范：

- feat: 添加新功能
- fix: 修复 bug
- docs: 文档更新
- style: 代码样式调整（不影响功能）
- refactor: 重构代码
- test: 添加或修改测试
- chore: 构建过程或辅助工具的变动

## 🛠️ 常用命令

```bash
# 安装依赖
pnpm install

# 构建项目
pnpm build

# 运行测试
pnpm test

# 代码检查
pnpm lint

# TypeScript 类型检查
pnpm typecheck

# 自动修复代码
pnpm lint:fix
```

## 🔧 配置说明

### 版本管理

项目使用 `release-please` 自动生成版本号和变更日志。当满足以下条件时会创建发布 PR：

- 在 `master` 分支上推送新提交
- 提交信息符合约定式提交规范
- 包含 `BREAKING CHANGE` 的提交会触发主版本号升级

### 发布流程

1. 合并发布 PR 到 `master`
2. GitHub Actions 自动构建和测试
3. 使用 OIDC 认证发布到 NPM
4. 自动生成发布标签和变更日志

## 🤝 贡献指南

欢迎贡献！请确保：

1. 遵循约定式提交规范
2. 添加相关测试
3. 保持代码风格一致
4. 更新必要的文档

## 📄 许可证

[MIT](./LICENSE) License &copy; 2024 [sobird](https://github.com/sobird)

<!-- Badges -->
[npm]: https://img.shields.io/npm/v/@sobird/murph.svg?style=flat-square&logo=npm&label=@sobird/murph
[npm-url]: https://www.npmjs.com/package/@sobird/murph
[build-status]: https://img.shields.io/github/actions/workflow/status/sobird/murph/release.yml?label=CI&logo=github&style=flat-square
[build-status-url]: https://github.com/sobird/murph/actions
[size]: https://img.shields.io/badge/dynamic/json?style=flat-square&label=mass&query=$.publish.pretty&url=https://packagephobia.com/v2/api.json?p=@sobird/murph&color=blueviolet
[size-url]: https://packagephobia.com/result?p=@sobird/murph
[license]: https://img.shields.io/github/license/sobird/murph.svg?style=flat-square&v=1
[license-url]: https://github.com/sobird/murph/blob/master/LICENSE
[typescript]: https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white
[cli]: https://img.shields.io/badge/-CLI-000000?style=flat-square&logo=gnu-bash
[node]: https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white
