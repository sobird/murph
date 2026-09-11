# @sobird/murph - Claude Code 指南

## 🚀 快速开始

### 安装与初始化

```bash
# 使用 degit 创建新项目
npx degit sobird/murph my-project
cd my-project
pnpm install
```

### 常用命令

```bash
# 构建项目
pnpm build

# 运行测试
pnpm test

# 代码检查
pnpm lint

# 自动修复
pnpm lint:fix

# 代码格式化
pnpm fmt

# 校验格式（不写入）
pnpm fmt:check

# TypeScript 类型检查
pnpm typecheck
```

## 📝 开发规范

### Git 提交规范

严格遵循 [约定式提交](https://www.conventionalcommits.org/) 规范：

- `feat`: 新功能 (minor 版本升级)
- `fix`: Bug 修复 (patch 版本升级)
- `docs`: 文档更新
- `style`: 代码样式调整（不影响功能）
- `refactor`: 重构代码
- `test`: 添加或修改测试
- `chore`: 构建过程或辅助工具变动
- `perf`: 性能优化
- `ci`: CI/CD 配置文件变动

**示例**:

```bash
feat: 添加新的配置文件生成器
fix(utils): 修复路径处理 bug
docs(readme): 更新安装说明
```

### 代码检查与格式化 (oxlint / oxfmt)

项目使用 [oxlint](https://oxc.rs/docs/guide/usage/linter) 做代码检查、[oxfmt](https://oxc.rs/docs/guide/usage/formatter) 做代码格式化：

- **检查**: `.oxlintrc.json` 启用 `correctness` 类规则，插件包含 `typescript`、`unicorn`、`oxc`
- **格式化**: `.oxfmtrc.json`，默认遵循 `.gitignore`
- **IDE**: `.vscode/settings.json` 配置保存时用 `oxc.oxc-vscode` 自动格式化
- **Git Hooks**: pre-commit 通过 `lint-staged` 运行 `oxlint --fix`

## 🔧 配置说明

### TypeScript 配置

- **目标**: ESNext
- **模块系统**: ESNext + bundler 解析
- **严格模式**: 启用所有严格检查
- **声明文件**: 自动生成到 dist/

### 构建配置 (tsup)

- **入口**: src/index.ts
- **格式**: ESM
- **清理**: 构建前清理输出目录
- **摇树优化**: 启用
- **压缩**: 启用

### 测试配置 (Vitest)

- **全局变量**: 默认禁用（更安全）
- **覆盖率**: 集成 v8 引擎
- **报告**: 控制台输出 + 覆盖率报告

## 🚀 CI/CD 流水线

### GitHub Actions 工作流

1. **Release 工作流** (`release.yml`)
   - 监听 master 分支推送
   - 使用 Release Please 自动生成发布 PR
   - 触发 Publish 工作流

2. **Publish 工作流** (`publish.yml`)
   - 检出代码
   - 设置 pnpm 和 Node.js
   - 缓存依赖
   - 安装依赖
   - 构建项目
   - 发布到 NPM（使用 OIDC 认证）

### 版本管理

- **自动版本**: Release Please 根据提交信息自动生成
- **发布条件**: 合并发布 PR 到 master 分支
- **版本策略**: 语义化版本控制 (SemVer)

## 📁 项目结构

```bash
murph/
├── src/              # 源代码
│   └── index.ts      # 主入口
├── packages/
│   └── core/         # 核心包
├── dist/             # 构建输出
├── .github/          # GitHub 配置
├── .husky/           # Git Hooks
├── node_modules/     # 依赖
└── scripts/          # 脚本工具
```

## 🛡️ 安全实践

### OIDC 认证

项目使用 GitHub Actions 的 OIDC 功能安全发布到 NPM：

- 无需长期有效的 NPM Token
- 基于临时令牌的访问
- 最小权限原则

### 依赖安全

- 定期依赖更新（通过 Dependabot）
- 自动漏洞扫描
- 锁定文件确保一致性 (`pnpm-lock.yaml`)

## 🎯 最佳实践

### 代码质量

1. **类型安全**: 使用 TypeScript 严格模式
2. **测试覆盖**: 重要功能必须有测试
3. **代码审查**: 所有更改都需要 PR 审查
4. **自动化**: 尽可能自动化重复任务

### 发布流程

1. 开发新功能或修复 bug
2. 编写相关测试
3. 确保所有检查通过
4. 提交符合规范的 commit
5. Release Please 自动创建发布 PR
6. 审查和合并发布 PR
7. 自动发布到 NPM

## 🐛 故障排除

### 常见问题

**oxlint 错误**:

```bash
pnpm lint:fix
```

**格式不一致**:

```bash
pnpm fmt
```

**构建失败**:

```bash
rm -rf node_modules && pnpm install
pnpm build
```

**测试失败**:

```bash
pnpm test --reporter=verbose
```

### 调试配置

VS Code 已配置好调试设置，可直接在编辑器中调试代码。

## 📚 参考链接

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [Vitest 官方文档](https://vitest.dev/guide/)
- [oxlint 文档](https://oxc.rs/docs/guide/usage/linter)
- [oxfmt 文档](https://oxc.rs/docs/guide/usage/formatter)
- [Release Please 文档](https://github.com/googleapis/release-please)
